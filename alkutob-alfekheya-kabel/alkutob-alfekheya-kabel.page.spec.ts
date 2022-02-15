import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkutobAlfekheyaKabelPage } from './alkutob-alfekheya-kabel.page';

describe('AlkutobAlfekheyaKabelPage', () => {
  let component: AlkutobAlfekheyaKabelPage;
  let fixture: ComponentFixture<AlkutobAlfekheyaKabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkutobAlfekheyaKabelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkutobAlfekheyaKabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
