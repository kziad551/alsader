import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MuhadaratPage } from './muhadarat.page';

describe('MuhadaratPage', () => {
  let component: MuhadaratPage;
  let fixture: ComponentFixture<MuhadaratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuhadaratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MuhadaratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
