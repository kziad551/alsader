import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkutobAlfekheyaBaedPage } from './alkutob-alfekheya-baed.page';

describe('AlkutobAlfekheyaBaedPage', () => {
  let component: AlkutobAlfekheyaBaedPage;
  let fixture: ComponentFixture<AlkutobAlfekheyaBaedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkutobAlfekheyaBaedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkutobAlfekheyaBaedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
