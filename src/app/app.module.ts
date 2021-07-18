import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TreeModule} from 'primeng/tree';
import { TreeSelectionComponent } from './tree-selection/tree-selection.component';
import {HttpClientModule} from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';



@NgModule({
  declarations: [
    AppComponent,
    TreeSelectionComponent
    
    
  ],
  imports: [
    BrowserModule,
    TreeModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
