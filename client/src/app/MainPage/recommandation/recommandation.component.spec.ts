import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandationComponent } from './recommandation.component';

describe('RecommandationComponent', () => {
  let component: RecommandationComponent;
  let fixture: ComponentFixture<RecommandationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommandationComponent]
    });
    fixture = TestBed.createComponent(RecommandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
