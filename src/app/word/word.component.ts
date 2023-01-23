import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  title: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.title = this.dataService.getOption()['title'] as string;
  }
}
