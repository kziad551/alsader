import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaTaharaPage } from './mawsua-tahara.page';

describe('MawsuaTaharaPage', () => {
  let component: MawsuaTaharaPage;
  let fixture: ComponentFixture<MawsuaTaharaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaTaharaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaTaharaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
