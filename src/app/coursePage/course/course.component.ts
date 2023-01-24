import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() courseName: string;
  @Input() hasVideo: boolean = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.hasVideo);
  }
}
