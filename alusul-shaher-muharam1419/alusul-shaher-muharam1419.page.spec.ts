import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShaherMuharam1419Page } from './alusul-shaher-muharam1419.page';

describe('AlusulShaherMuharam1419Page', () => {
  let component: AlusulShaherMuharam1419Page;
  let fixture: ComponentFixture<AlusulShaherMuharam1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShaherMuharam1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShaherMuharam1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
