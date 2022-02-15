import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaatHewaratShahedDarajiPage } from './lekaat-hewarat-shahed-daraji.page';

describe('LekaatHewaratShahedDarajiPage', () => {
  let component: LekaatHewaratShahedDarajiPage;
  let fixture: ComponentFixture<LekaatHewaratShahedDarajiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatHewaratShahedDarajiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaatHewaratShahedDarajiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
