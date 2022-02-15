import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraa30Page } from './khotabalsayed-ad3eya-ekraa30.page';

describe('KhotabalsayedAd3eyaEkraa30Page', () => {
  let component: KhotabalsayedAd3eyaEkraa30Page;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraa30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraa30Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraa30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
