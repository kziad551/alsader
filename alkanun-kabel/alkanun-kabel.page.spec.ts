import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkanunKabelPage } from './alkanun-kabel.page';

describe('AlkanunKabelPage', () => {
  let component: AlkanunKabelPage;
  let fixture: ComponentFixture<AlkanunKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkanunKabelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkanunKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
