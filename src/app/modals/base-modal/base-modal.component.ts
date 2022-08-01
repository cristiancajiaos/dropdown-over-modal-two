import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent implements OnInit {

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  public dismiss(): void {
    this.modal.dismiss('Dismiss')
  }
}
