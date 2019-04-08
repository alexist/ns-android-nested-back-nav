import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { WorkRoutingModule } from "../work/work-routing.module";
import { WorkComponent } from "../work/work.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WorkRoutingModule
    ],
    declarations: [
        WorkComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WorkModule { }
