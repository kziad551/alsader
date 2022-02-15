import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawsuaMawaraalfekehPage } from './mawsua-mawaraalfekeh.page';

describe('MawsuaMawaraalfekehPage', () => {
  let component: MawsuaMawaraalfekehPage;
  let fixture: ComponentFixture<MawsuaMawaraalfekehPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawsuaMawaraalfekehPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawsuaMawaraalfekehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
