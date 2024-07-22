import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ArticleModel} from "../common/articles.model";

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input({required: true}) article: ArticleModel | null = null;
}
