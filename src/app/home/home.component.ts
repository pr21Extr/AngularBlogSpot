import { Component, OnInit } from '@angular/core';
import { ContentfullService } from '../services/contentfull.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private ContentfullService : ContentfullService){
  // this.ContentfullService.getAllEntries();
}
blogPosts$ : Observable <any> | undefined;

ngOnInit(): void {
  this.blogPosts$ = this.ContentfullService.getAllEntries();
  
}
}
