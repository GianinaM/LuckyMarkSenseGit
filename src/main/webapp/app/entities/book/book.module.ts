import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {bookRoute} from './book.route';
import {BookAddComponent} from './book.add.component';
import {BookService} from './book.service';
import {MarkSenseMaterialModule} from '../../material/material.module';
import {CommonModule} from '@angular/common';
import {AuthorService} from '../author/author.service';
import {FormsModule} from '@angular/forms';
import {BookListComponent} from './book.list.component';
import {BookDeleteComponent} from "./book.delete.component";

@NgModule({
    imports: [
        RouterModule.forChild(bookRoute),
        CommonModule,
        FormsModule,
        MarkSenseMaterialModule
    ],
    declarations: [
        BookAddComponent,
        BookListComponent,
        BookDeleteComponent
    ],
    entryComponents: [
        BookAddComponent,
        BookDeleteComponent
    ],
    providers: [
        BookService,
        AuthorService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarkSenseBookModule {}
