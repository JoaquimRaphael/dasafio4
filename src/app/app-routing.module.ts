import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacCreateComponent } from './contac-create/contac-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContacUpdateComponent } from './contac-update/contac-update.component';
const routes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/create', component: ContacCreateComponent},
  {path: 'contacts/:id', component: ContacUpdateComponent},
  {path: '', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
