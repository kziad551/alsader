import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Alusul1415Page } from './alusul1415.page';

describe('Alusul1415Page', () => {
  let component: Alusul1415Page;
  let fixture: ComponentFixture<Alusul1415Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alusul1415Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Alusul1415Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
