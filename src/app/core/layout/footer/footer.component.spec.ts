import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";

describe(`Footer Component`, () => {
    let fixture: ComponentFixture<FooterComponent>;
    let component: FooterComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(FooterComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    });

    it(`should create component`, () => {
        expect(component).toBeTruthy();
    });
});