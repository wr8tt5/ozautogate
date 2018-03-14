import { Component, OnInit } from '@angular/core';
import { QuoteModalService } from '../quote-modal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public quoteService: QuoteModalService
  ) { }

  ngOnInit() {
  }

}
