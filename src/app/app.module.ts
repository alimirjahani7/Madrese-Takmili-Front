import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {SignInUpComponent} from './sign-in-up/sign-in-up.component';
import {FormsModule} from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SignInUpComponent,
    NewPostComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
