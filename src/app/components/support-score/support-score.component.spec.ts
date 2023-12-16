import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportScoreComponent } from './support-score.component';

describe('SupportScoreComponent', () => {
  let component: SupportScoreComponent;
  let fixture: ComponentFixture<SupportScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
