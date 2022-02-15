import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AldurusFekehPage } from './aldurus-fekeh.page';

describe('AldurusFekehPage', () => {
  let component: AldurusFekehPage;
  let fixture: ComponentFixture<AldurusFekehPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AldurusFekehPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AldurusFekehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
