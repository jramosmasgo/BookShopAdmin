import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/core/services/author.service';
import { FileService } from 'src/app/core/services/file.service';
import { Validatedata } from 'src/app/shared/helper/validate-data';
import { ValidateUrl } from 'src/app/shared/helper/validate-url';
import { AuthorGetAll } from 'src/app/shared/models/author/author-getAll';
import { AuthorGetById } from 'src/app/shared/models/author/author-getById';
import { AuthorPost } from 'src/app/shared/models/author/author-post';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [
  ],
  providers: [
    AuthorService
  ]
})
export class AuthorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private fileService: FileService, private authorService: AuthorService, private renderer2: Renderer2) { }

  @ViewChild('imageToUpload') imageToUpload?: ElementRef;
  author: AuthorPost = {} as AuthorPost;
  photoUpload: string = '';
  authors: AuthorGetAll[] = [];
  numberPages: number[] = [];
  pageActive: number = 1;
  update: boolean = false;
  authorUpdate: AuthorGetById = {} as AuthorGetById;

  // validar imagen
  validImageUrl(url: string): boolean {
    return new ValidateUrl().isUrlValid(url);
  }


  // Generar Formulario
  formCreateAuthor: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    bibliography: ['', [Validators.required]],
    gender: ['X', [Validators.required, Validators.pattern('[FM]')]],
    datebirth: ['', Validators.required]
  });

  ngOnInit(): void {
    this.getAllAuthors();
  }

  // Mostrar foto cargada 
  showImageUpload() {
    const iamgetoupload = this.imageToUpload?.nativeElement;
    if (!iamgetoupload.classList.contains('form__image-float-show')) {
      this.renderer2.addClass(iamgetoupload, 'form__image-float-show');
    } else {
      console.log('pase por aqui')
      this.renderer2.removeClass(iamgetoupload, 'form__image-float-show');
    }
  }


  // Validacion de campos de formulario
  validateData(campo: string): boolean {
    return new Validatedata().ValidateField(this.formCreateAuthor, campo);
  }

  // Cambiar Estado formulario a Actualizar
  setFormUpdate(idAuthor: string) {
    this.update = true;
    this.authorService.getAuthorById(idAuthor)
      .subscribe(res => {
        if (res.data) {
          console.log(res);
          this.authorUpdate = res.data;
          this.formCreateAuthor.patchValue({
            name: this.authorUpdate.name,
            bibliography: this.authorUpdate.bibliography,
            gender: this.authorUpdate.gender,
            datebirth: this.authorUpdate.dateBirth
          })
          this.photoUpload = this.authorUpdate.photo ? this.authorUpdate.photo : '';
        }
      });
  }

  // Agregar Imagen a Interface
  convertImage(event: any): void {
    const file = event.target.files[0];

    this.fileService.convertBase64(file)
      .then((res) => {
        this.photoUpload = res;
      });
  }

  // Listar los autores gurdados 
  getAllAuthors(result: number = 10, page = 1): void {
    this.authorService.getAllAuthors(page, result).subscribe(res => {
      this.authors = res.data;

      // generando el paginado
      const npages = Math.ceil(res.total / 10);
      this.numberPages = Array(npages).fill(1).map((x, i) => i + 1);
      this.pageActive = page;
    })
  }

  // Actualizar informacion del autor
  updateAuthor() {
    this.authorUpdate = {
      ...this.authorUpdate,
      name: this.formCreateAuthor.controls.name.value,
      bibliography: this.formCreateAuthor.controls.bibliography.value,
      gender: this.formCreateAuthor.controls.gender.value,
      dateBirth: this.formCreateAuthor.controls.datebirth.value
    };

    this.authorService.updateAuthor(this.authorUpdate)
      .subscribe(res => {
        console.log(res);
      })
  }

  // Guardar datos del Autor 
  submitForm() {
    this.author = { ...this.formCreateAuthor.value };
    this.author.photo = this.photoUpload;
    this.authorService.createAuthor(this.author).subscribe(res => {
      console.log(res)
    });
  }
}
