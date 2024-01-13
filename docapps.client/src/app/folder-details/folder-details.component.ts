// folder-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder-details',
  templateUrl: './folder-details.component.html',
  styleUrls: ['./folder-details.component.css']
})
export class FolderDetailsComponent implements OnInit {
  folderData: any; // Change the type based on your data structure

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: { [key: string]: any }) => {
      if (params && params['folderData']) {
        this.folderData = JSON.parse(params['folderData']);
      } else {
        // Handle the case where parameters are missing or not properly formatted
        console.error('Invalid or missing parameters');
      }
    });
  }
}
