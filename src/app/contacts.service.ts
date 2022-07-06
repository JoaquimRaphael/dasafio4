import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface contact{
  id: number,
  name: string,
  phone: string
}

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  listContact(){
    return this.http.get<contact[]>(`${urlBase}/contacts`);
  }

  retrieveContact(id: number){
    return this.http.get<contact>(`${urlBase}/contacts/${id}`);
  }

  createContact(contact: contact){
    return this.http.post<contact>(`${urlBase}/contacts`, contact);
  }

  updateContact(contact : contact){
    return this.http.put<contact>(`${urlBase}/contacts/${contact.id}`, contact);
  }

  deleteContact(id: number){
    return this.http.delete(`${urlBase}/contacts/${id}`);
  }

}
