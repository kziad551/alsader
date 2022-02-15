import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulZelka3da1419Page } from './alusul-zelka3da1419.page';

describe('AlusulZelka3da1419Page', () => {
  let component: AlusulZelka3da1419Page;
  let fixture: ComponentFixture<AlusulZelka3da1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulZelka3da1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulZelka3da1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
