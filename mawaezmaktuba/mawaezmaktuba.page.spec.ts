import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawaezmaktubaPage } from './mawaezmaktuba.page';

describe('MawaezmaktubaPage', () => {
  let component: MawaezmaktubaPage;
  let fixture: ComponentFixture<MawaezmaktubaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawaezmaktubaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawaezmaktubaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
