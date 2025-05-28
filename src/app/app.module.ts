import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberDetailsComponent } from './shared/components/member-details/member-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }