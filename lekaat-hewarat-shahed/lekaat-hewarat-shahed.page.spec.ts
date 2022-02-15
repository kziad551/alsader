import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaatHewaratShahedPage } from './lekaat-hewarat-shahed.page';

describe('LekaatHewaratShahedPage', () => {
  let component: LekaatHewaratShahedPage;
  let fixture: ComponentFixture<LekaatHewaratShahedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatHewaratShahedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaatHewaratShahedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
