import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  url: string = 'https://localhost:7249/api/Contacts';
  contacts: any;
  fullName: any;
  address: any;
  email: any;
  phone: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getContact();
  }

  getContact() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'https://localhost:7249',
    });
    this.http.get(this.url, { headers }).subscribe((res) => {
      this.contacts = res;
    });
  }

  addContact() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'https://localhost:7249',
    });
    const body = {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      address: this.address,
    };
    this.http.post(this.url, body, { headers }).subscribe((res) => {
      //this.contacts = res;
      this.getContact();
    });
  }
  deleteContact() {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'https://localhost:7249',
    });

    this.http.delete(this.url, { headers }).subscribe((res) => {
      //this.contacts = res;
      this.getContact();
    });
  }
}
