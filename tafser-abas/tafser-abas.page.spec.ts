import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TafserAbasPage } from './tafser-abas.page';

describe('TafserAbasPage', () => {
  let component: TafserAbasPage;
  let fixture: ComponentFixture<TafserAbasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TafserAbasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TafserAbasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
