import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {entitiesRoute} from './entity.route';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        RouterModule.forChild(entitiesRoute),
        FormsModule
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkSenseEntityModule {}
