import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SlipComponent } from './slip/slip.component';

const routes: Routes = [
  {path: '', component: SlipComponent, pathMatch: 'full'},
  {path: 'new', component: NewComponent},
  {path: 'edit/:nameKey', component: EditComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
