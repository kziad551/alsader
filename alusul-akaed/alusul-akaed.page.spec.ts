import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulAkaedPage } from './alusul-akaed.page';

describe('AlusulAkaedPage', () => {
  let component: AlusulAkaedPage;
  let fixture: ComponentFixture<AlusulAkaedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulAkaedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulAkaedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
