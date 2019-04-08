import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent {

    constructor(
        private routerExtensions: RouterExtensions
    ) {}

    goToWork() {
        this.routerExtensions.navigate(["work"]);
    }
}
