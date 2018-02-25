import { Component, OnInit } from '@angular/core';
import { QuoteModalService } from '../quote-modal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    public quoteService: QuoteModalService
  ) { }

  ngOnInit() {
  }

}
