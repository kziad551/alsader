import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulShaherMuharam1418Page } from './alusul-shaher-muharam1418.page';

describe('AlusulShaherMuharam1418Page', () => {
  let component: AlusulShaherMuharam1418Page;
  let fixture: ComponentFixture<AlusulShaherMuharam1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulShaherMuharam1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulShaherMuharam1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
