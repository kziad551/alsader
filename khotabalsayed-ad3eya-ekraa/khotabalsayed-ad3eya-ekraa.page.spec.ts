import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhotabalsayedAd3eyaEkraaPage } from './khotabalsayed-ad3eya-ekraa.page';

describe('KhotabalsayedAd3eyaEkraaPage', () => {
  let component: KhotabalsayedAd3eyaEkraaPage;
  let fixture: ComponentFixture<KhotabalsayedAd3eyaEkraaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhotabalsayedAd3eyaEkraaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhotabalsayedAd3eyaEkraaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
