import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { ExportsvgComponent } from '../pages/exportsvg/exportsvg.component';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent {

  constructor(private dialog: MatDialog){}
  openExportDialog() {
    this.dialog.open(ExportsvgComponent);
  }
}
