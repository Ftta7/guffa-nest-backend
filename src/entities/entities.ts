export class Store {
    id: String;
    storeUniqName: String;
    name: string;
    logo: string;

  }


  export class User {
    name: string;
    email: string;
    tokens:Array<Token>;
    role: string;
    createdAt: Date;
  }


  export class Token {
    token: string;
    type: string;
  }