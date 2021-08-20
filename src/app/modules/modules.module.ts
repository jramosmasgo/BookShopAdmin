import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../core/services/category.service';

@NgModule({
  imports: [
    ModulesRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CategoryService
  ],
  declarations: [CategoryComponent, BookComponent, AuthorComponent, HomeComponent],
})

export class ModulesModule { }
