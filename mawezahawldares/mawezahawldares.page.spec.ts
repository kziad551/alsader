import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawezahawldaresPage } from './mawezahawldares.page';

describe('MawezahawldaresPage', () => {
  let component: MawezahawldaresPage;
  let fixture: ComponentFixture<MawezahawldaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawezahawldaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawezahawldaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
