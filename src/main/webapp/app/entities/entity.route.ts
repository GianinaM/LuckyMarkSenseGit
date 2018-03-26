import {Route, Routes} from '@angular/router';

export const entitiesRoute: Routes =[
    {
        path: 'book',
        loadChildren: './book/book.module#MarkSenseBookModule',
    },
    {
        path: 'author',
        loadChildren: './author/author.module#MarkSenseBookModule',
    }
]
;
