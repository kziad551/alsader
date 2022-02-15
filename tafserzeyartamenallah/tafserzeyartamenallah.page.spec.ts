import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TafserzeyartamenallahPage } from './tafserzeyartamenallah.page';

describe('TafserzeyartamenallahPage', () => {
  let component: TafserzeyartamenallahPage;
  let fixture: ComponentFixture<TafserzeyartamenallahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserzeyartamenallahPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TafserzeyartamenallahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
