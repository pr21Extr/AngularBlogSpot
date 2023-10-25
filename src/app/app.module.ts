import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule,} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {MatButtonModule,} from '@angular/material/button';
import {MatToolbarModule,} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card-component/card-component.component';
import { LocalizerComponent } from './localizer/localizer.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogPostComponent,
    CardComponent,
    LocalizerComponent,
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
