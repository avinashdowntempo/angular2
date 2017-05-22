import { Injectable } from '@angular/core';
import { ACCOUNTS } from '.././models/mock-account';

@Injectable()
export class AccountService {
    getAccounts() {
	const promise = new Promise((resolve, reject) => {
    resolve(ACCOUNTS);
});
        return promise;
    }
}