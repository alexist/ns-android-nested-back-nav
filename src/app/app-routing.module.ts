import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { LoungeComponent } from "./home/lounge.component";
import { WorkModule } from "./work/work.module";
import { GarageComponent } from "./home/garage.component";

const routes: Routes = [
    { path: "", redirectTo: "/home/(homeoutlet:lounge)", pathMatch: "full" },
    {
        path: "home", component: HomeComponent, children: [
            { path: "lounge", component: LoungeComponent, outlet: "homeoutlet" },
            { path: "garage", component: GarageComponent, outlet: "homeoutlet" }
        ]
    },
    { path: "work", loadChildren: () => WorkModule },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
