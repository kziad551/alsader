import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwal1417Page } from './alusul-jamade-awal1417.page';

describe('AlusulJamadeAwal1417Page', () => {
  let component: AlusulJamadeAwal1417Page;
  let fixture: ComponentFixture<AlusulJamadeAwal1417Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulJamadeAwal1417Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulJamadeAwal1417Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
