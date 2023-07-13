import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-exportsvg',
  templateUrl: './exportsvg.component.html',
  styleUrls: ['./exportsvg.component.scss']
})
export class ExportsvgComponent {
  constructor(public modalRef: MdbModalRef<ExportsvgComponent>) {}
}
