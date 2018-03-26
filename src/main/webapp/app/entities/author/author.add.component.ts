import {AuthorService} from "./author.service";
import {Author} from "./author.model";
import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
    selector: 'author-add',
    templateUrl: './author.add.component.html',
    styles: []
})

export class AuthorAddComponent implements OnInit {
    private author: Author;

    constructor(private authorService: AuthorService) {
    }

    ngOnInit() {
        this.author = new Author();
    }

    save() {
        if (this.author.id !== undefined) {
            this.subscribeToSaveResponse(
                this.authorService.update(this.author));
        } else {
            this.subscribeToSaveResponse(
                this.authorService.create(this.author));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Author>>) {
        result.subscribe((res: HttpResponse<Author>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Author) {
    }

    private onSaveError() {
    }
}
