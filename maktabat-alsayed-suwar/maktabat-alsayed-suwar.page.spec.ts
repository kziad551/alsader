import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaktabatAlsayedSuwarPage } from './maktabat-alsayed-suwar.page';

describe('MaktabatAlsayedSuwarPage', () => {
  let component: MaktabatAlsayedSuwarPage;
  let fixture: ComponentFixture<MaktabatAlsayedSuwarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaktabatAlsayedSuwarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaktabatAlsayedSuwarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
