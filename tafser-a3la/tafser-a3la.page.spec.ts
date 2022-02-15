import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserA3laPage } from './tafser-a3la.page';

describe('TafserA3laPage', () => {
  let component: TafserA3laPage;
  let fixture: ComponentFixture<TafserA3laPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserA3laPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserA3laPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
