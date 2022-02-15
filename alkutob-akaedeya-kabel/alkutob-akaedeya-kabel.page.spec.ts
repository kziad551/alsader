import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkutobAkaedeyaKabelPage } from './alkutob-akaedeya-kabel.page';

describe('AlkutobAkaedeyaKabelPage', () => {
  let component: AlkutobAkaedeyaKabelPage;
  let fixture: ComponentFixture<AlkutobAkaedeyaKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkutobAkaedeyaKabelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkutobAkaedeyaKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
