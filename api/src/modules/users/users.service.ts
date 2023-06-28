import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getuserById(userId: string) {
    return { userId };
  }
}
