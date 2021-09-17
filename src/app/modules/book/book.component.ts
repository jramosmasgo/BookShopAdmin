import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/core/services/author.service';
import { BookService } from 'src/app/core/services/book.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { FileService } from 'src/app/core/services/file.service';
import { Alerts } from 'src/app/shared/helper/alerts';
import { AuthorGetAll } from 'src/app/shared/models/author/author-getAll';
import { Book } from 'src/app/shared/models/book/book';
import { BookGetAll } from 'src/app/shared/models/book/book-getAll';
import { Category } from 'src/app/shared/models/category/category';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [
    BookService
  ]
})
export class BookComponent implements OnInit {

  constructor(private categoryService: CategoryService,
    private authorService: AuthorService,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private renderer2: Renderer2,
    private fileService: FileService) { }


  @ViewChild('imageToUpload') imageToUpload?: ElementRef;
  alerts: Alerts = new Alerts();
  categories: Category[] = [];
  authors: AuthorGetAll[] = [];
  books: BookGetAll[] = [];
  photoUpload: string = '';

  formCreateBook: FormGroup = this.formBuilder.group({
    isbn: ['', [Validators.required]],
    page: ['', [Validators.required]],
    price: ['', [Validators.required]],
    yearPublish: ['', [Validators.required]],
    authorId: ['', [Validators.required]],
    categoryId: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    description: ['', [Validators.required]],
    title: ['', [Validators.required]]
  });

  // Mostrar foto cargada 
  showImageUpload() {
    const iamgetoupload = this.imageToUpload?.nativeElement;
    if (!iamgetoupload.classList.contains('form__image-float-show')) {
      this.renderer2.addClass(iamgetoupload, 'form__image-float-show');
    } else {
      this.renderer2.removeClass(iamgetoupload, 'form__image-float-show');
    }
  }

  // Agregar Imagen a Interface
  convertImage(event: any): void {
    const file = event.target.files[0];
    this.fileService.convertBase64(file)
      .then((res) => {
        this.photoUpload = res;
      });
  }

  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(res => {
        this.books = res.data;
      })
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories()
      .subscribe(res => {
        this.categories = res;
      })
  }

  getAllAuthors(): void {
    this.authorService.getAllAuthors()
      .subscribe(res => {
        this.authors = res.data.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        })
      })
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllCategories();
    this.getAllAuthors();
  }

  submitForm() {
    let book: Book = { ...this.formCreateBook.value };
    book.photo = this.photoUpload;
    this.bookService.createBook(book)
      .subscribe(res => {
        this.alerts.ShowSucces('Libro Creado');
        this.getAllBooks();
      }, (err) => {
        this.alerts.ShowError('Error en el proceso');
      }, () => {
        this.formCreateBook.reset();
      })
  }

}
