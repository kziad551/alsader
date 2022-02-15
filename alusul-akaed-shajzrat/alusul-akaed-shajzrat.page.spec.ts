import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulAkaedShajzratPage } from './alusul-akaed-shajzrat.page';

describe('AlusulAkaedShajzratPage', () => {
  let component: AlusulAkaedShajzratPage;
  let fixture: ComponentFixture<AlusulAkaedShajzratPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulAkaedShajzratPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulAkaedShajzratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
