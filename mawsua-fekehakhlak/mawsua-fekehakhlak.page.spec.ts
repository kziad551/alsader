import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaFekehakhlakPage } from './mawsua-fekehakhlak.page';

describe('MawsuaFekehakhlakPage', () => {
  let component: MawsuaFekehakhlakPage;
  let fixture: ComponentFixture<MawsuaFekehakhlakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaFekehakhlakPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaFekehakhlakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
