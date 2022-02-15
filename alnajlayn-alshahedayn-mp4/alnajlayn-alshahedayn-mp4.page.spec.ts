import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynMp4Page } from './alnajlayn-alshahedayn-mp4.page';

describe('AlnajlaynAlshahedaynMp4Page', () => {
  let component: AlnajlaynAlshahedaynMp4Page;
  let fixture: ComponentFixture<AlnajlaynAlshahedaynMp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlnajlaynAlshahedaynMp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlnajlaynAlshahedaynMp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
