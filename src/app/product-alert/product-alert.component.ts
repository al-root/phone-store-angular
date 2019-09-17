import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() {
    console.log( 'Product: ', this.product );
   }

  ngOnInit() {
    console.log( 'Product after init: ', this.product );
  }

}