import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Alusul1418Page } from './alusul1418.page';

describe('Alusul1418Page', () => {
  let component: Alusul1418Page;
  let fixture: ComponentFixture<Alusul1418Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alusul1418Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Alusul1418Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
