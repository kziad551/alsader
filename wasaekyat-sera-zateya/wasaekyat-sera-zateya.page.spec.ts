import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WasaekyatSeraZateyaPage } from './wasaekyat-sera-zateya.page';

describe('WasaekyatSeraZateyaPage', () => {
  let component: WasaekyatSeraZateyaPage;
  let fixture: ComponentFixture<WasaekyatSeraZateyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasaekyatSeraZateyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WasaekyatSeraZateyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
