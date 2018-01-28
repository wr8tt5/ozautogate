import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UnlocodeService } from '../unlocode.service';
import { States } from '../unlocode';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class QuoteRequest {
  constructor(
    public name?: string,
    public email?: string,
    public country?: string,
    public state?: string,
    public gateType?: string,
    public comments?: string) {}
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote-modal.component.html',
  styleUrls: ['./quote-modal.component.css']
})
export class QuoteModalComponent implements OnInit {

  private quoteUrl = '/sendquote';

  allCountries: string[];
  allStates: States;
  countryStates: string[];
  gateTypes: string[] = [ 'Standard', 'Deluxe' ];
  submitted: boolean = false;

  model: QuoteRequest = new QuoteRequest();

  constructor(public bsModalRef: BsModalRef,
                   private unlocodeService: UnlocodeService,
                   private http: HttpClient) { }

  ngOnInit() {
    this.getCountries();
    this.getStates();
  }

  getCountries(): void {
    this.unlocodeService.getCountries().subscribe(countries => this.allCountries = countries);
  }

  getStates(): void {
    this.unlocodeService.getStates().subscribe(states => this.allStates = states);
  }

  onChangeCountry(selectedIndex: number): void {
    if (selectedIndex >= 0) {
        this.countryStates = this.allStates[selectedIndex];
        this.model.state = '';
    }
  }

  onSubmit(): void {
    this.http.post(this.quoteUrl, this.model, httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
    this.submitted = true;
  }
}
