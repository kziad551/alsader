import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlHetafatPage } from './al-hetafat.page';

describe('AlHetafatPage', () => {
  let component: AlHetafatPage;
  let fixture: ComponentFixture<AlHetafatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlHetafatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlHetafatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
