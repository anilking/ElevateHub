import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportScoreFormComponent } from './support-score-form.component';

describe('SupportScoreFormComponent', () => {
  let component: SupportScoreFormComponent;
  let fixture: ComponentFixture<SupportScoreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportScoreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportScoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
