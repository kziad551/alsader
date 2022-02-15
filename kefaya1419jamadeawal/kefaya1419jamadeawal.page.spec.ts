import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419jamadeawalPage } from './kefaya1419jamadeawal.page';

describe('Kefaya1419jamadeawalPage', () => {
  let component: Kefaya1419jamadeawalPage;
  let fixture: ComponentFixture<Kefaya1419jamadeawalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419jamadeawalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419jamadeawalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
