import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBigCardComponent } from './video-big-card.component';

describe('VideoBigCardComponent', () => {
  let component: VideoBigCardComponent;
  let fixture: ComponentFixture<VideoBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
