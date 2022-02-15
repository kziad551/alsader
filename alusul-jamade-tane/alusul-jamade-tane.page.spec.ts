import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulJamadeTanePage } from './alusul-jamade-tane.page';

describe('AlusulJamadeTanePage', () => {
  let component: AlusulJamadeTanePage;
  let fixture: ComponentFixture<AlusulJamadeTanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulJamadeTanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulJamadeTanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
