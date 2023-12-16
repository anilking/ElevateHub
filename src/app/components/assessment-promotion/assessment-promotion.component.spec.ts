import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPromotionComponent } from './assessment-promotion.component';

describe('AssessmentPromotionComponent', () => {
  let component: AssessmentPromotionComponent;
  let fixture: ComponentFixture<AssessmentPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPromotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
