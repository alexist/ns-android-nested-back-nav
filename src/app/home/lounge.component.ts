import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    template: `
    <StackLayout>
        <Label text="In the lounge"></Label>
        <Button text="Go to the garage" (tap)="goToGarage()"></Button>
    </StackLayout>
    `
})

export class LoungeComponent {
    constructor(
        private routerExtensions: RouterExtensions
    ) {}

    goToGarage() {
        this.routerExtensions.navigate(["home", { outlets: { homeoutlet: "garage" }}]);
    }
}
