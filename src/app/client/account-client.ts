import { Account } from '../interface/account';

export class AccountClient {
    private dummyAccounts: Array<Account> = [{
        id: 0,
        firstName: 'Holly',
        lastName: 'Baker',
        email: 'hollybaker194@gmail.com',
        favourites: []
    }];

    public getAccount(id: number): Account {
        return this.dummyAccounts.find(account => account.id === id);
    }
}