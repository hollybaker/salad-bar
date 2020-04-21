import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoot } from '../component/app-root';

describe('AppRoot', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppRoot
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppRoot);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'salad-bar'`, () => {
    const fixture = TestBed.createComponent(AppRoot);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('salad-bar');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppRoot);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('salad-bar app is running!');
  });
});
