import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlmathafSuwarPage } from './almathaf-suwar.page';

describe('AlmathafSuwarPage', () => {
  let component: AlmathafSuwarPage;
  let fixture: ComponentFixture<AlmathafSuwarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmathafSuwarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlmathafSuwarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
