import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LekaatHewaratShahedHananaPage } from './lekaat-hewarat-shahed-hanana.page';

describe('LekaatHewaratShahedHananaPage', () => {
  let component: LekaatHewaratShahedHananaPage;
  let fixture: ComponentFixture<LekaatHewaratShahedHananaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekaatHewaratShahedHananaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LekaatHewaratShahedHananaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
