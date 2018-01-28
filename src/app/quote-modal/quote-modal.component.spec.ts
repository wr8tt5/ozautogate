import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteModalComponent } from './quote-modal.component';

describe('QuoteComponent', () => {
  let component: QuoteModalComponent;
  let fixture: ComponentFixture<QuoteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
