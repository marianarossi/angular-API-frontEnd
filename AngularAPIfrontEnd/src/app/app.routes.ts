import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';

export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: '', component: HomeComponent},
    {path: 'edit/:id', component: EditComponent}
];
