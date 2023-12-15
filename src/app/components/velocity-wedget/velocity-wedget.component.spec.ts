import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityWedgetComponent } from './velocity-wedget.component';

describe('VelocityWedgetComponent', () => {
  let component: VelocityWedgetComponent;
  let fixture: ComponentFixture<VelocityWedgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelocityWedgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocityWedgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
