import {Routes} from '@angular/router';
import {BookListComponent} from './book.list.component';

export const bookRoute: Routes = [
    {
        path: '',
        component: BookListComponent
    }
];
