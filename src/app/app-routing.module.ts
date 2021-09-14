import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthorComponent } from './modules/author/author.component';

const routes: Routes = [
    {
        path: 'admin', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule), canActivate: [AuthGuard],
    },
    {
        path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    { path: '**', redirectTo: 'auth' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}