import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkuraanKabelPage } from './alkuraan-kabel.page';

describe('AlkuraanKabelPage', () => {
  let component: AlkuraanKabelPage;
  let fixture: ComponentFixture<AlkuraanKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkuraanKabelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkuraanKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
