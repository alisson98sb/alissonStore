import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightsComponent } from './home/highlights/highlights.component';
import { CategoriesComponent } from './home/highlights/categories/categories.component';
import { PopularComponent } from './home/popular/popular.component';
import { CabecalhoComponent } from './home/cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightsComponent,
    CategoriesComponent,
    PopularComponent,
    CabecalhoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
