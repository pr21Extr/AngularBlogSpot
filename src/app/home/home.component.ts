import { Component, OnInit } from '@angular/core';
import { ContentfullService } from '../services/contentfull.service';
import { Observable } from 'rxjs';
import '@angular/localize/init';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private ContentfullService : ContentfullService){
}

blogPosts$ : Observable <any> | undefined;
catTitle = $localize`:@@cat-title|Default Cat Title`;
  catAuthor = $localize`:@@cat-author|Default Cat Author`;
  catSummary = $localize`:@@cat-summary|Default Cat Summary`;
  carTitle = $localize`:@@car-title|Default Car Title`;
  carAuthor = $localize`:@@car-author|Default Car Author`;
  carSummary = $localize`:@@car-summary|Default Car Summary`;
  foodTitle = $localize`:@@food-title|Default Food Title`;
  foodAuthor = $localize`:@@food-author|Default Food Author`;
  foodSummary = $localize`:@@food-summary|Default Food Summary`;


ngOnInit(): void {
  this.blogPosts$ = this.ContentfullService.getAllEntries();
}
}
