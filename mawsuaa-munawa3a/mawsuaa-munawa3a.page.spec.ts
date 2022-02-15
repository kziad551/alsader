import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaaMunawa3aPage } from './mawsuaa-munawa3a.page';

describe('MawsuaaMunawa3aPage', () => {
  let component: MawsuaaMunawa3aPage;
  let fixture: ComponentFixture<MawsuaaMunawa3aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaaMunawa3aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaaMunawa3aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
