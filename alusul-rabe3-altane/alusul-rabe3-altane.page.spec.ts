import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulRabe3AltanePage } from './alusul-rabe3-altane.page';

describe('AlusulRabe3AltanePage', () => {
  let component: AlusulRabe3AltanePage;
  let fixture: ComponentFixture<AlusulRabe3AltanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulRabe3AltanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulRabe3AltanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
