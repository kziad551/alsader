import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwal1418Page } from './alusul-jamade-awal1418.page';

describe('AlusulJamadeAwal1418Page', () => {
  let component: AlusulJamadeAwal1418Page;
  let fixture: ComponentFixture<AlusulJamadeAwal1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulJamadeAwal1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulJamadeAwal1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
