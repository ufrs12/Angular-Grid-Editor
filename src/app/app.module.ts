import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SafeGridAreaPipe } from './grid/grid/pipes/grid-area.Pipe';
import { SafeGridTemplatePipe } from './grid/grid/pipes/grid-template.Pipe';
import { GridComponent } from './grid/grid/grid.component';
import { SafeUrlPipe } from './grid/grid/pipes/safe-url.Pipe';
import { SafeStylePipe } from './grid/grid/pipes/safe-style.Pipe';
import { SafeHtmlPipe } from './grid/grid/pipes/safe-html.Pipe';
import { MenubarComponent } from './components/menubar/menubar.component';
import { ExportsvgComponent } from './components/pages/exportsvg/exportsvg.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SafeGridTemplatePipe,
    SafeGridAreaPipe,
    SafeUrlPipe,
    SafeStylePipe,
    SafeHtmlPipe,
    MenubarComponent,
    ExportsvgComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
