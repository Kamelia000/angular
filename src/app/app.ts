
import { Component } from '@angular/core';

import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Education } from './education/education';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    Navbar,
    Hero,
    About,
    Education,
    Contact
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  name = 'Kamelia Mahmoud';

  jobTitle = 'Software Engineer';

  description =
    'I build modern web applications and enjoy solving problems through technology.';

  aboutMe =
    'I am a Software Engineering graduate passionate about web development, programming, and learning new technologies.';

  skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Java',
    'Python',
    'React'
  ];

  education = [
    {
      degree: 'B.Sc. Software Engineering',
      university: 'The British University in Egypt',
      year: '2026'
    }
  ];

  email = 'your.email@example.com';

}
