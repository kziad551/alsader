import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhadarahawlalmawezaPage } from './muhadarahawlalmaweza.page';

describe('MuhadarahawlalmawezaPage', () => {
  let component: MuhadarahawlalmawezaPage;
  let fixture: ComponentFixture<MuhadarahawlalmawezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuhadarahawlalmawezaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuhadarahawlalmawezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
