import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/core/services/category.service';
import { Validatedata } from 'src/app/shared/helper/validate-data';
import { Category } from 'src/app/shared/models/category/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) { }

  formCreateCategory: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
  })

  categories: Category[] = [];
  category: Category = {} as Category;
  categoryUpdate!: Category;
  editCategory: boolean = false;
  loadCategories: boolean = false;

  ngOnInit(): void {
    this.getAllCategories();
  }

  // Validacion de campos de formulario
  validateData(campo: string): boolean {
    return new Validatedata().ValidateField(this.formCreateCategory, campo);
  }

  // Cambiar estado de formulario para actualizar
  setFormToUpdate(categoryToUpdate: Category): void {
    console.log
    this.editCategory = true;
    this.categoryUpdate = categoryToUpdate;
    this.formCreateCategory.patchValue({ name: categoryToUpdate.name });
  }

  // Cambiar estado de formulario a nuevo
  setFormCreate(): void {
    this.formCreateCategory.reset();
    this.editCategory = false;
  }

  // Obtener lista de todas las categorias 
  getAllCategories(): void {
    this.loadCategories = true;
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    }, (err) => {
      console.log(err)
    }, () => {
      this.loadCategories = false;
    })
  }

  // Actualizacion de la categoria
  updateCategory(): void {
    this.categoryUpdate = { ...this.categoryUpdate, name: this.formCreateCategory.controls.name.value };
    this.categoryService.updateCategory(this.categoryUpdate)
      .subscribe(res => {
        this.getAllCategories();
        this.setFormCreate();
      })
  }

  // Borrar Categoria
  deleteCategory(categorytoDelete: Category): void {
    this.categoryService.deleteCategory(categorytoDelete)
      .subscribe(res => {
        this.getAllCategories();
      })
  }

  // Guardado de la categoria 
  submitForm(): void {
    this.category = { ...this.formCreateCategory.value, order: 0 };
    this.categoryService.createCategory(this.category)
      .subscribe(res => {
        this.getAllCategories();
      });
  }
}
