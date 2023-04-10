import { Injectable } from '@nestjs/common';
import {users} from './interface/users'
let rahul:users={
  id:1,
  name:'Rahul'
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUser():users {
    return rahul;
  }
}