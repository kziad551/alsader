import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawaezAkhlakeyaPage } from './mawaez-akhlakeya.page';

describe('MawaezAkhlakeyaPage', () => {
  let component: MawaezAkhlakeyaPage;
  let fixture: ComponentFixture<MawaezAkhlakeyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawaezAkhlakeyaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawaezAkhlakeyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
