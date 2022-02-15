import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulZelka3daPage } from './alusul-zelka3da.page';

describe('AlusulZelka3daPage', () => {
  let component: AlusulZelka3daPage;
  let fixture: ComponentFixture<AlusulZelka3daPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulZelka3daPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulZelka3daPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
