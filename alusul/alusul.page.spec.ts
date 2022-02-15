import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlusulPage } from './alusul.page';

describe('AlusulPage', () => {
  let component: AlusulPage;
  let fixture: ComponentFixture<AlusulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlusulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
