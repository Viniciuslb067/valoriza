import { EntityRepository, Repository } from "typeorm";
import { User } from "../entites/User";


@EntityRepository(User)
class UsersRepositores extends Repository<User> {


}

export { UsersRepositores }