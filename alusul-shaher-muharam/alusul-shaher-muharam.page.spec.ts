import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShaherMuharamPage } from './alusul-shaher-muharam.page';

describe('AlusulShaherMuharamPage', () => {
  let component: AlusulShaherMuharamPage;
  let fixture: ComponentFixture<AlusulShaherMuharamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShaherMuharamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShaherMuharamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
