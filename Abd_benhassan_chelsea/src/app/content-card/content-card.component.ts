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
      this.contentList.add({ id: 1, title: 'best player', description: 'best player in history ', creator: 'Abdulrhman', imgURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.90min.com%2Fposts%2F6558375-chelsea-s-10-greatest-players-of-all-time&psig=AOvVaw29W6EfFbSMNhD5FwLdXgOJ&ust=1705875708441000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjlqLCA7YMDFQAAAAAdAAAAABAD'});
      this.contentList.add({ id: 2, title: 'best year', description: 'best year for the teams as 2020', creator: 'Abdulrhman', imgURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Ffootball%2F2021%2Fmay%2F29%2Fmanchester-city-chelsea-champions-league-final-match-report-kai-havertz&psig=AOvVaw2o0r0nJ-Jcy8zXWKEQs5R2&ust=1705875976933000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDD-a-B7YMDFQAAAAAdAAAAABAD' });
      this.contentList.add({ id: 3, title: 'The Studim ', description: 'the home of chelse', creator: 'Abdulrhman', type: 'Type' });
  }

  ngOnInit(): void {
  }
}
