import { NgModule } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoryService } from '../core/services/category.service';
import { ModulesComponent } from './modules.component';
import { SharedModule } from '../shared/shared.module';
import { JwtInterceptor } from '../core/interceptors/jwt.interceptor';

@NgModule({
  imports: [
    ModulesRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    CategoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  declarations: [CategoryComponent, BookComponent, AuthorComponent, HomeComponent, ModulesComponent],
})

export class ModulesModule { }
