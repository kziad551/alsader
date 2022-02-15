import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaKetablelbay3Page } from './mawsua-ketablelbay3.page';

describe('MawsuaKetablelbay3Page', () => {
  let component: MawsuaKetablelbay3Page;
  let fixture: ComponentFixture<MawsuaKetablelbay3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaKetablelbay3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaKetablelbay3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
