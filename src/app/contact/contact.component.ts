import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';
import { ContactModel } from './ContactModel';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  userList: ContactModel[];
  ngOnInit(): void {
    this.httpService.getUsers().subscribe((users: ContactModel[]) => {
      this.userList = users;
    });
  }
}
