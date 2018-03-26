import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Book} from './book.model';
import {BookService} from './book.service';
import {HttpResponse} from '@angular/common/http';
import {BookAddComponent} from './book.add.component';
import {BookDeleteComponent} from "./book.delete.component";

@Component({
    selector: 'book-list',
    styleUrls: ['book.list.component.css'],
    templateUrl: './book.list.component.html',
})
export class BookListComponent implements OnInit {
    private displayedColumns = ['select', 'title', 'publicationDate', 'description', 'price'];
    private dataSource: MatTableDataSource<Book>;
    private selection = new SelectionModel<Book>(true, []);

    @ViewChild
    (MatPaginator) paginator: MatPaginator;

    constructor(private bookService: BookService, public dialog: MatDialog) {
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit() {
        this.bookService.query().subscribe((res: HttpResponse<Book[]>) => {
            this.dataSource = new MatTableDataSource<Book>(res.body);
        });
    }

    /** Whether the number of selected books matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((row) => this.selection.select(row));
    }

    openDialog() {
        let dialogRef = this.dialog.open(BookAddComponent, {
            width: '30%'
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result) {
                this.dataSource.data.push(result);
                this.refreshTable();
            }
        });
    }

    private refreshTable() {
        this.dataSource.paginator = this.paginator;
    }

    private editBook() {

    }

    private deleteBook() {
        let dialogRef = this.dialog.open(BookDeleteComponent, {
            width: '30%'
        });

        dialogRef.afterClosed().subscribe(result => {
            this.refreshTable();
        });
    }
}
