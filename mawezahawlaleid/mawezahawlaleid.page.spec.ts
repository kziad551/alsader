import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MawezahawlaleidPage } from './mawezahawlaleid.page';

describe('MawezahawlaleidPage', () => {
  let component: MawezahawlaleidPage;
  let fixture: ComponentFixture<MawezahawlaleidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MawezahawlaleidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MawezahawlaleidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
