// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderListComponent } from './folder-list/folder-list.component';
import { FolderDetailsComponent } from './folder-details/folder-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/folder-list', pathMatch: 'full' },
  { path: 'folder-list', component: FolderListComponent },
  { path: 'folder-details', component: FolderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
