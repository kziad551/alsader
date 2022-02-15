import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlkuraanBaadPage } from './alkuraan-baad.page';

describe('AlkuraanBaadPage', () => {
  let component: AlkuraanBaadPage;
  let fixture: ComponentFixture<AlkuraanBaadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkuraanBaadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlkuraanBaadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
