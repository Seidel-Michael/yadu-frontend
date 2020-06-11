import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  displayedColumns = ['username', 'groups'];
  dataSource: User[];

  constructor(private users: UsersService) {}

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.users.getUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }
}
