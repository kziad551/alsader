import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawaketalsalatPage } from './mawaketalsalat.page';

describe('MawaketalsalatPage', () => {
  let component: MawaketalsalatPage;
  let fixture: ComponentFixture<MawaketalsalatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawaketalsalatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawaketalsalatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
