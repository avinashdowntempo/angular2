import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { Account } from './models/account';
import { OnInit } from '@angular/core';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [AccountService]
})
export class AccountListComponent implements OnInit {
   accounts: Account[];
   constructor(private _accountService: AccountService) {}
   getAccounts() {
     this._accountService.getAccounts().then((accounts: Account[]) => this.accounts = accounts);
   }
   ngOnInit() {
     this.getAccounts();
   }
  onSelect(mod) {
    if ( mod.show === false){
      mod.show = true;
    }else {
      mod.show = false;
    }
  }
}



