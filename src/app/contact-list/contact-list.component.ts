
import { Component, OnInit } from '@angular/core';
import {contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor( private contactService: ContactsService) { }
  contacts: contact[] = []
  ngOnInit(): void {
    this.contactService.listContact().subscribe(
      (contatos) => {this.contacts = contatos;}
    )
  }

}
