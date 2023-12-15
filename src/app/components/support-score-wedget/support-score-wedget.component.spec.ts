import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportScoreWedgetComponent } from './support-score-wedget.component';


describe('SupportScoreWedgetComponent', () => {
  let component: SupportScoreWedgetComponent;
  let fixture: ComponentFixture<SupportScoreWedgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportScoreWedgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportScoreWedgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
