import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserKuryshPage } from './tafser-kurysh.page';

describe('TafserKuryshPage', () => {
  let component: TafserKuryshPage;
  let fixture: ComponentFixture<TafserKuryshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserKuryshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserKuryshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
