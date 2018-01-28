import { Component, OnInit } from '@angular/core';
import { QuoteModalService } from '../quote-modal.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public quoteService: QuoteModalService) { }

  ngOnInit() {
  }

}
