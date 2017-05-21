import {Injectable} from '@angular/core';
import {ACCOUNTS} from '.././models/mock-account';

@Injectable()
export class AccountService {
    getAccounts() {
        return Promise.resolve(ACCOUNTS);
    }
}