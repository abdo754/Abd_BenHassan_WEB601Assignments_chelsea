import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent  implements OnInit{
  contentList: ContentList;

  constructor() {
      this.contentList = new ContentList();

      // Add at least 3 valid items
      this.contentList.add({ id: 1, title: 'First Title', description: 'First Description', creator: 'First Creator' });
      this.contentList.add({ id: 2, title: 'Second Title', description: 'Second Description', creator: 'Second Creator', imgURL: 'http://example.com/second.jpg' });
      this.contentList.add({ id: 3, title: 'Third Title', description: 'Third Description', creator: 'Third Creator', type: 'Type Three' });
  }

  ngOnInit(): void {
  }
}
