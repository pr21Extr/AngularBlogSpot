import { Component } from '@angular/core';

@Component({
  selector: 'app-localizer',
  templateUrl: './localizer.component.html',
  styleUrls: ['./localizer.component.css']
})
export class LocalizerComponent {
  title = $localize`Localizer`;
  name = '';

}
 