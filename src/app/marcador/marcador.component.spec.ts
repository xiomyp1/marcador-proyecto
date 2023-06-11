import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadorComponent } from './marcador.component';

describe('MarcadorComponent', () => {
  let component: MarcadorComponent;
  let fixture: ComponentFixture<MarcadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcadorComponent]
    });
    fixture = TestBed.createComponent(MarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
