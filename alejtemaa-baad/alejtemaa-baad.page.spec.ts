import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlejtemaaBaadPage } from './alejtemaa-baad.page';

describe('AlejtemaaBaadPage', () => {
  let component: AlejtemaaBaadPage;
  let fixture: ComponentFixture<AlejtemaaBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlejtemaaBaadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlejtemaaBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
