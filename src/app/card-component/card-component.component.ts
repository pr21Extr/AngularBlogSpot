import { Component } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponent {

    isHovered = false;
  
    changeCursor() {
      this.isHovered = true;
    }
  
    restoreCursor() {
      this.isHovered = false;
    }
  
}
