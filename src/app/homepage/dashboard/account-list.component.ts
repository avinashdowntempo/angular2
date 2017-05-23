import { Component } from '@angular/core';
//import { AccountService } from './services/account.service';
import { AccountHttpService } from './services/account-http.service';
import { Account } from './models/account';
import { OnInit } from '@angular/core';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [AccountHttpService]
})
export class AccountListComponent implements OnInit {
   accounts: Account[];
   constructor(private _accountHttpService: AccountHttpService) {}
   //getAccounts() {
    // this._accountService.getAccounts().then((accounts: Account[]) => this.accounts = accounts);
   //}
    getAccounts() {
    this._accountHttpService.getAccounts().subscribe(data => this.accounts = data);
  }
   ngOnInit() {
     this.getAccounts();
	 console.log(this.accounts);
   }
  onSelect(mod) {
    if ( mod.show === false){
      mod.show = true;
    }else {
      mod.show = false;
    }
  }
}



