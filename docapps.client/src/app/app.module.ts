import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { FolderDetailsComponent } from './folder-details/folder-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderListComponent,
    FolderDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
