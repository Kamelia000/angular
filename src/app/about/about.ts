
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})

export class About {

  @Input() aboutMe: string = '';

  @Input() skills: string[] = [];

}
