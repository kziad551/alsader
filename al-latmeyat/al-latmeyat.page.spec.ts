import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlLatmeyatPage } from './al-latmeyat.page';

describe('AlLatmeyatPage', () => {
  let component: AlLatmeyatPage;
  let fixture: ComponentFixture<AlLatmeyatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlLatmeyatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlLatmeyatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
