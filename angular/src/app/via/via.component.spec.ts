import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaComponent } from './via.component';

describe('ViaComponent', () => {
  let component: ViaComponent;
  let fixture: ComponentFixture<ViaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input box ', async(() => {
    const fixture = TestBed.createComponent(ViaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toContain("Input to API.");
  }));

  it('should render output box', async(() => {
    const fixture = TestBed.createComponent(ViaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').textContent).toContain("Output to API");
  }));
});
