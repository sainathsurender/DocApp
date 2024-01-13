// folder-list.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface FolderData {
  folderName: string;
  selectAll: string;
  selectedRoles: string[];
  selectedUsers: number;
}

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent {
  folderDataList: FolderData[] = [
    {
      folderName: 'Folder 1',
      selectAll: 'Yes',
      selectedRoles: ['Admin', 'User'],
      selectedUsers: 20
    },
    {
      folderName: 'Folder 2',
      selectAll: 'No',
      selectedRoles: ['Admin', 'User'],
      selectedUsers: 20
    },
    {
      folderName: 'Folder 3',
      selectAll: 'Yes',
      selectedRoles: ['Admin', 'User'],
      selectedUsers: 20
    },
    {
      folderName: 'Folder 4',
      selectAll: 'Yes',
      selectedRoles: ['Admin', 'User'],
      selectedUsers: 20
    },
    {
      folderName: 'Folder 5',
      selectAll: 'No',
      selectedRoles: ['Admin', 'User'],
      selectedUsers: 20
    },
    // Add more items as needed
  ];

  constructor(private router: Router) { }

  // Function to handle role selection
  toggleRole(data: FolderData, role: string): void {
    if (data.selectedRoles.includes(role)) {
      data.selectedRoles = data.selectedRoles.filter(r => r !== role);
    } else {
      data.selectedRoles.push(role);
    }
  }

  // Function to navigate to folder-details component on folder name click
  onFolderNameClick(data: FolderData): void {
    this.router.navigate(['/folder-details'], { queryParams: { folderData: JSON.stringify(data) } });
  }
}
