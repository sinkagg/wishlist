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

  listFilter : String = '0';

  newWishText = '';

  visibleItems : WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(value: any){
    if (value == '0') {
    this.visibleItems = this.items;
    } else if (value == '1') {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    } else {
      this.visibleItems = this.items.filter(items => items.isComplete);
    }
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete
    console.log(item);
  }
}

