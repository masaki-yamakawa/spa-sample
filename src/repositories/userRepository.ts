import { Repository, IRepository } from "./repository";

export interface IUserRepository extends IRepository {
}

export class UserRepository extends Repository implements IUserRepository {
}
