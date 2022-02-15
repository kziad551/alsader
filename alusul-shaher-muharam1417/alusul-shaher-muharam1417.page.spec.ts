import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShaherMuharam1417Page } from './alusul-shaher-muharam1417.page';

describe('AlusulShaherMuharam1417Page', () => {
  let component: AlusulShaherMuharam1417Page;
  let fixture: ComponentFixture<AlusulShaherMuharam1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShaherMuharam1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShaherMuharam1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
