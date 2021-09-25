import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HighlightsComponent } from './home/highlights/highlights.component';
import { CategoriesComponent } from './home/highlights/categories/categories.component';
import { PopularComponent } from './home/popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightsComponent,
    CategoriesComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
