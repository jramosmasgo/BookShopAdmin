import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/core/services/category.service';
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

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    })
  }

  submitForm(): void {
    this.category = { ...this.formCreateCategory.value };
    this.category.order = 0;
    this.categoryService.createCategory(this.category).subscribe(res => {
      this.getAllCategories();
    });
  }

}
