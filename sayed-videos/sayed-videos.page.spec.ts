import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayedVideosPage } from './sayed-videos.page';

describe('SayedVideosPage', () => {
  let component: SayedVideosPage;
  let fixture: ComponentFixture<SayedVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedVideosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayedVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
