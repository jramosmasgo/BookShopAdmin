import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/core/services/file.service';
import { Author } from 'src/app/shared/models/author/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [
  ]
})
export class AuthorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private fileService: FileService) { }

  author: Author = {} as Author;
  photoUpload: string = '';

  // Generar Formulario
  formCreateAuthor: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    bibliography: ['', [Validators.required]],
    gender: [2, [Validators.required, Validators.min(0), Validators.max(1)]],
    datebirth: ['', Validators.required]
  });



  ngOnInit(): void {
  }

  // Validacion de campos de formulario
  validateData(campo: string): boolean {
    return this.formCreateAuthor.controls[campo].errors &&
      this.formCreateAuthor.controls[campo].touched ? true : false;
  }

  // Agregar Imagen a Interface
  convertImage(event: any): void {
    const file = event.target.files[0];

    this.fileService.convertBase64(file)
      .then((res) => {
        console.log(res);
        this.photoUpload = res;
      });
  }

  // Enviar Formulario
  submitForm() {
    this.author = { ...this.formCreateAuthor.value };
    this.author.photo = this.photoUpload;
    console.log(this.author);
  }



}
