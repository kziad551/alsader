import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mawk3AlesteshhadPage } from './mawk3-alesteshhad.page';

describe('Mawk3AlesteshhadPage', () => {
  let component: Mawk3AlesteshhadPage;
  let fixture: ComponentFixture<Mawk3AlesteshhadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mawk3AlesteshhadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mawk3AlesteshhadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
