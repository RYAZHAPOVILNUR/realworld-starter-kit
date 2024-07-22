import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {ArticlesModel} from "../common/articles.model";

@Injectable({providedIn: 'root'})
export class ArticlesService {
    private readonly http = inject(HttpClient);

    public getArticles(): Observable<ArticlesModel> {
        return this.http.get<ArticlesModel>('https://api.realworld.io/api/articles');
    }
}
