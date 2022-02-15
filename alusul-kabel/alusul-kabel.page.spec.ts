import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlusulKabelPage } from './alusul-kabel.page';

describe('AlusulKabelPage', () => {
  let component: AlusulKabelPage;
  let fixture: ComponentFixture<AlusulKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulKabelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlusulKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
