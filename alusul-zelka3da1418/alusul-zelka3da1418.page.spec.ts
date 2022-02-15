import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulZelka3da1418Page } from './alusul-zelka3da1418.page';

describe('AlusulZelka3da1418Page', () => {
  let component: AlusulZelka3da1418Page;
  let fixture: ComponentFixture<AlusulZelka3da1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulZelka3da1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulZelka3da1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
