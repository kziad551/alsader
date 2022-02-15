import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulZelka3da1417Page } from './alusul-zelka3da1417.page';

describe('AlusulZelka3da1417Page', () => {
  let component: AlusulZelka3da1417Page;
  let fixture: ComponentFixture<AlusulZelka3da1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulZelka3da1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulZelka3da1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
