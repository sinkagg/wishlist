import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Grass that cuts itself')
  ]
  title = 'Sinil Kang';
}
