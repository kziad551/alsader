import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeraAlZateyaPage } from './sera-al-zateya.page';

describe('SeraAlZateyaPage', () => {
  let component: SeraAlZateyaPage;
  let fixture: ComponentFixture<SeraAlZateyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeraAlZateyaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeraAlZateyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
