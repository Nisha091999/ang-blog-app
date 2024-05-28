import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConitionComponent } from './terms-and-conition.component';

describe('TermsAndConitionComponent', () => {
  let component: TermsAndConitionComponent;
  let fixture: ComponentFixture<TermsAndConitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndConitionComponent]
    });
    fixture = TestBed.createComponent(TermsAndConitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
