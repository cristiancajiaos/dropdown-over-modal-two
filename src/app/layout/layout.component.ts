import { BaseModalComponent } from './../modals/base-modal/base-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit() {
  }

  public openModal(): void {
    this.modal.open(BaseModalComponent, { size: 'lg' }).result.then((res) => {
      console.log(res);
    }, (rej) => {
      console.log(rej);
    });
  }
}
