import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    template: `
    <StackLayout>
        <Label text="In the garage"></Label>
        <Button text="Go to work" (tap)="goToWork()"></Button>
        <Button text="Go back" (tap)="goBack()"></Button>
    </StackLayout>
    `
})

export class GarageComponent {
    constructor(
        private routerExtensions: RouterExtensions
    ) {
        console.log("garage loaded");
    }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
    goToWork() {
        this.routerExtensions.navigate(["work"]);
    }
}
