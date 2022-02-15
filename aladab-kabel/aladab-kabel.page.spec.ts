import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AladabKabelPage } from './aladab-kabel.page';

describe('AladabKabelPage', () => {
  let component: AladabKabelPage;
  let fixture: ComponentFixture<AladabKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AladabKabelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AladabKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
