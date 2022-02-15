import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwal1419Page } from './alusul-jamade-awal1419.page';

describe('AlusulJamadeAwal1419Page', () => {
  let component: AlusulJamadeAwal1419Page;
  let fixture: ComponentFixture<AlusulJamadeAwal1419Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulJamadeAwal1419Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulJamadeAwal1419Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
