import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawaezPage } from './mawaez.page';

describe('MawaezPage', () => {
  let component: MawaezPage;
  let fixture: ComponentFixture<MawaezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawaezPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawaezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
