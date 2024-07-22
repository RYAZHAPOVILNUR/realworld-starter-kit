import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ArticlesService} from "../api/articles.service";
import {ArticleItemComponent} from "../article-item/article-item.component";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [
    AsyncPipe,
    ArticleItemComponent
  ],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesListComponent {
  private readonly articlesService = inject(ArticlesService);

  public readonly articles$ = this.articlesService.getArticles();
}
