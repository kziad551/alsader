import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoofalensanamamalshahawatPage } from './doofalensanamamalshahawat.page';

describe('DoofalensanamamalshahawatPage', () => {
  let component: DoofalensanamamalshahawatPage;
  let fixture: ComponentFixture<DoofalensanamamalshahawatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoofalensanamamalshahawatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoofalensanamamalshahawatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
