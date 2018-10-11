import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.scss']
})
export class DetailsButtonComponent implements OnInit {
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
