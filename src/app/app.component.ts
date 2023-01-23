import { Component } from '@angular/core';

import { DataService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Case_Study';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setOption('title', this.title);
  }
}
