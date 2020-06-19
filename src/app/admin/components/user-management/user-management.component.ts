import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { UsersService } from '../../../shared/services';
import { UserDetailDialogComponent } from '../user-detail-dialog/user-detail-dialog.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  columnsToDisplay = ['username', 'groups'];
  dataSource: User[];

  constructor(private users: UsersService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getData();
  }

  addUser() {
    const ref = this.dialog.open(UserDetailDialogComponent, {
      data: { mode: 'add', user: { username: '', groups: [] } },
      width: '30%',
    });
    ref.afterClosed().subscribe((user) => {
      if (user) {
        this.users.addUser(user.username, user.password, user.groups).subscribe(() => {
          this.getData();
        });
      }
    });
  }

  editUser(id: string) {
    this.users.getUser(id).subscribe((user) => {
      const ref = this.dialog.open(UserDetailDialogComponent, { data: { mode: 'edit', user }, width: '30%' });
      ref.afterClosed().subscribe((userResult) => {
        if (userResult) {
          this.users.updateUser(userResult).subscribe(() => {
            this.getData();
          });
        }
      });
    });
  }

  private getData() {
    this.users.getUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }
}
