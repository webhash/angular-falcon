import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViaComponent } from './via.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('ViaComponent', () => {
  let component: ViaComponent;
  let fixture: ComponentFixture<ViaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule      
      ],
      declarations: [
        ViaComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have button with specific text', async(() => {
    const fixture = TestBed.createComponent(ViaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain("Send Information to API");
  }));
});
