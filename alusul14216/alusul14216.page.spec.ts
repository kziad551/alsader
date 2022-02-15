import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Alusul14216Page } from './alusul14216.page';

describe('Alusul14216Page', () => {
  let component: Alusul14216Page;
  let fixture: ComponentFixture<Alusul14216Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alusul14216Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Alusul14216Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
