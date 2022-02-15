import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaAlfekehPage } from './mawsua-alfekeh.page';

describe('MawsuaAlfekehPage', () => {
  let component: MawsuaAlfekehPage;
  let fixture: ComponentFixture<MawsuaAlfekehPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaAlfekehPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaAlfekehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
