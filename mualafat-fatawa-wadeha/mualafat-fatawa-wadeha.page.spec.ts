import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MualafatFatawaWadehaPage } from './mualafat-fatawa-wadeha.page';

describe('MualafatFatawaWadehaPage', () => {
  let component: MualafatFatawaWadehaPage;
  let fixture: ComponentFixture<MualafatFatawaWadehaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MualafatFatawaWadehaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MualafatFatawaWadehaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
