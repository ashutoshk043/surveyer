import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormsComponent } from './survey-forms.component';

describe('SurveyFormsComponent', () => {
  let component: SurveyFormsComponent;
  let fixture: ComponentFixture<SurveyFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
