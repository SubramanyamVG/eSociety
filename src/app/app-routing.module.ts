import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { MemberDetailsComponent } from './shared/components/member-details/member-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'member-details', component: MemberDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
