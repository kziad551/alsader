import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatMawaraAlfekehPage } from './mualafat-mawara-alfekeh.page';

describe('MualafatMawaraAlfekehPage', () => {
  let component: MualafatMawaraAlfekehPage;
  let fixture: ComponentFixture<MualafatMawaraAlfekehPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatMawaraAlfekehPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatMawaraAlfekehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
