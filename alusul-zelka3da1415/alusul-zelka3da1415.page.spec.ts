import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulZelka3da1415Page } from './alusul-zelka3da1415.page';

describe('AlusulZelka3da1415Page', () => {
  let component: AlusulZelka3da1415Page;
  let fixture: ComponentFixture<AlusulZelka3da1415Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulZelka3da1415Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulZelka3da1415Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
