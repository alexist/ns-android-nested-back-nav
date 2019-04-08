import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Work",
    moduleId: module.id,
    templateUrl: "./work.component.html"
})
export class WorkComponent {

    constructor(
        private routerExtensions: RouterExtensions
    ) {}

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
