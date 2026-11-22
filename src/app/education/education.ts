
import { Component, Input } from '@angular/core';

interface EducationItem {
  degree: string;
  university: string;
  year: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css'
})

export class Education {

  @Input() education: EducationItem[] = [];

}
