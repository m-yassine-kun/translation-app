import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTranslationComponent } from './previous-translation.component';

describe('PreviousTranslationComponent', () => {
  let component: PreviousTranslationComponent;
  let fixture: ComponentFixture<PreviousTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousTranslationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
