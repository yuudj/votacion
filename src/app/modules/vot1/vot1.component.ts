import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vot1',
  templateUrl: './vot1.component.html',
  styleUrls: ['./vot1.component.scss']
})
export class Vot1Component implements OnInit {

  sobres: number[] = [];
  manualInput: number = 0;

  constructor() { }

  ngOnInit(): void {
    let sobres = JSON.parse(localStorage.getItem('sobres') || '[]')
    if (Array.isArray(sobres)) {
      this.sobres = sobres;
    }
    //localStorage.setItem('tutorial', 'Como utilizar el LocalStorage en Angular');
  }

  save(): void {

    localStorage.setItem('sobres', JSON.stringify(this.sobres));
  }
  addNumber(toAdd: number): void {
    this.sobres.push(toAdd);
  }

  removeNumber(index: number): void {
    this.sobres.splice(index, 1);
  }

  onKeydown(event: any) {
    if (event.key === "Enter") {
      this.sobres.push(this.manualInput);
      this.manualInput = 0;
    }
  }
  total(): number {
    return this.sobres.reduce((accumulator, current) => accumulator + current, 0);
  }
}
