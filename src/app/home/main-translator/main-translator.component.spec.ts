import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTranslatorComponent } from './main-translator.component';

describe('MainTranslatorComponent', () => {
  let component: MainTranslatorComponent;
  let fixture: ComponentFixture<MainTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTranslatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
