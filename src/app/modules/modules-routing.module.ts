import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
    {
        path: '', component: ModulesComponent, children: [
            { path: 'categories', component: CategoryComponent },
            { path: 'books', component: BookComponent },
            { path: 'authors', component: AuthorComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})


export class ModulesRoutingModule { }