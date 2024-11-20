import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Grass that cuts itself'),
    new WishItem('TV')
  ];
  title = 'Sinil Kang';

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete
    console.log(item);
  }
}

