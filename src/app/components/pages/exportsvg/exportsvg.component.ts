import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { SVG } from '@svgdotjs/svg.js'


@Component({
  selector: 'app-exportsvg',
  templateUrl: './exportsvg.component.html',
  styleUrls: ['./exportsvg.component.scss'],
})
export class ExportsvgComponent implements OnInit {
  dialogTitle: string = 'Экспорт в SVG';
  constructor(
    public dialogRef: MatDialogRef<ExportsvgComponent>,
  ){}
  ngOnInit() {
    let draw = SVG().addTo('#someId').size(300, 300);
    let rect = draw.rect(100, 100).attr({ fill: '#38A6FF' });

    var symbol = draw.symbol();
    symbol.rect(100, 100).fill('#f09');
    var use  = draw.use(symbol).move(200, 200);
    use  = draw.use(symbol).move(100, 100);
    console.log(document.getElementsByTagName('svg')[0])
}
}
