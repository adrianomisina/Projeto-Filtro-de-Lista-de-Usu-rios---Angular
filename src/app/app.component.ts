import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users.list';
import { IFilterOptions } from './interfaces/filter-0ptions-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  usersList: IUser[] = [];
  userListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.userListFiltered = this.usersList;
    }, 3000);
  }

  onUserSelected(user: IUser): void {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions): void {
    console.log(filterOptions);
    this.userListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }
  
  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[]= [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()))

    return filteredList;
  }
}
