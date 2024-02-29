import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessageComponent } from './contact-message.component';

describe('ContactMessageComponent', () => {
  let component: ContactMessageComponent;
  let fixture: ComponentFixture<ContactMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMessageComponent]
    });
    fixture = TestBed.createComponent(ContactMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
