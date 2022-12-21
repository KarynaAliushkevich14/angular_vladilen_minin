import { Component } from '@angular/core';
import { IProduct } from './models/product';
import { products as data } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App components';

  /** Если прописываем тут products, то можем использовать их в app.component.html */
  products: IProduct[] = data

}
