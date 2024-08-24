import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
@Get('/api/users')
findAll( ){
return "user"
}

}
