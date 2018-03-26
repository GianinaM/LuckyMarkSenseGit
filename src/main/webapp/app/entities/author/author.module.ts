import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MarkSenseMaterialModule} from '../../material/material.module';
import {authorRoute} from "./author.route";
import {AuthorAddComponent} from "./author.add.component";
import {AuthorService} from "./author.service";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        RouterModule.forChild([authorRoute]),
        MarkSenseMaterialModule,
        FormsModule
    ],
    declarations: [
        AuthorAddComponent,
    ],
    entryComponents: [
    ],
    providers: [
        AuthorService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkSenseBookModule {}
