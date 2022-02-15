import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Kefaya1419shaabanPage } from './kefaya1419shaaban.page';

describe('Kefaya1419shaabanPage', () => {
  let component: Kefaya1419shaabanPage;
  let fixture: ComponentFixture<Kefaya1419shaabanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kefaya1419shaabanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Kefaya1419shaabanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
