import {Component, OnInit} from '@angular/core';
import {Book} from './book.model';
import {BookService} from './book.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthorService} from '../author/author.service';
import {Author} from '../author/author.model';
import {MatDialogRef, MatSnackBar} from '@angular/material';

@Component({
    selector: 'book-delete',
    templateUrl: './book.delete.component.html',
    styleUrls: ['book.delete.component.css']
})
export class BookDeleteComponent implements OnInit {
    public book: Book;
    public authors: Author[];

    constructor(private bookService: BookService, private authorService: AuthorService, private snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<BookDeleteComponent>) {
    }

    ngOnInit() {
        this.book = new Book();
        this.authorService.query().subscribe( (res: HttpResponse<Author[]>) => {
            this.authors = res.body;
        });
    }

    deleteBook() {
        this.subscribeToSaveResponse(this.bookService.delete(this.book.id));
        this.dialogRef.close(this.book);
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Book>>) {
        result.subscribe((res: HttpResponse<Book>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.openSnackBar('A Book was deleted');
    }

    private onSaveError() {
        this.openSnackBar('Error deleting a Book');
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, 'Cancel', {
            duration: 2000,
        });
    }
}
