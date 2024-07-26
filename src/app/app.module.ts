import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { MasterComponent } from './Components/master/master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { BlogComponent } from './Components/blog/blog.component';
import { CardComponent } from './Components/card/card.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { TvShowComponent } from './Components/tv-show/tv-show.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './Layouts/blank-layout/blank-layout.component';
import { SharedModule } from './Core/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { TvShowsComponent } from './Components/tv-shows/tv-shows.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './Core/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MasterComponent,
    NotFoundComponent,
    BlogComponent,
    CardComponent,
    ContactComponent,
    MoviesComponent,
    TvShowComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    CarouselComponent,
    TvShowsComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
    CarouselModule,
    MatPaginatorModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
