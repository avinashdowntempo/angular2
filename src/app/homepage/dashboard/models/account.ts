export interface Account {
  name: string;
  id: number;
  subaccounts:
   [{   data:   number[];
        labels: String[];
        show: boolean;
        accname: String;
        acctype: String;
        mrkvalue: number; }];
}
