import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlusulJamadeAwalPage } from './alusul-jamade-awal.page';

describe('AlusulJamadeAwalPage', () => {
  let component: AlusulJamadeAwalPage;
  let fixture: ComponentFixture<AlusulJamadeAwalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlusulJamadeAwalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlusulJamadeAwalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
