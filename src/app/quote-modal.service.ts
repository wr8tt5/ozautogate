import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';

@Injectable()
export class QuoteModalService {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openQuoteForm() {
    this.bsModalRef = this.modalService.show(QuoteModalComponent), {};
  }
}
