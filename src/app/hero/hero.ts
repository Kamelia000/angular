
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})

export class Hero {

  @Input() name: string = '';

  @Input() jobTitle: string = '';

  @Input() description: string = '';

}
