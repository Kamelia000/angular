
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class Contact {

  @Input() email: string = '';

  userName: string = '';

  userEmail: string = '';

  message: string = '';

  submitted: boolean = false;

  sendMessage() {

    if (
      !this.userName.trim() ||
      !this.userEmail.trim() ||
      !this.message.trim()
    ) {
      return;
    }

    this.submitted = true;

    console.log('Name:', this.userName);
    console.log('Email:', this.userEmail);
    console.log('Message:', this.message);

  }

}
