import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NewBooks } from './new-books/new-books';
import { Category } from './category/category';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'new-release', component: NewBooks},
    {path: 'categories', component: Category},
    {path: '**', redirectTo: 'home', pathMatch:'full'}

];
