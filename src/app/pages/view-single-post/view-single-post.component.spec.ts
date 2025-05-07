import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSinglePostComponent } from './view-single-post.component';

describe('ViewSinglePostComponent', () => {
  let component: ViewSinglePostComponent;
  let fixture: ComponentFixture<ViewSinglePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSinglePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
