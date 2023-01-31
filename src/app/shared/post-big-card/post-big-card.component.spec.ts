import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBigCardComponent } from './post-big-card.component';

describe('PostBigCardComponent', () => {
  let component: PostBigCardComponent;
  let fixture: ComponentFixture<PostBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
