import { IRepository } from "./repository";
import { LoginRepository } from "./loginRepository";
import { UserRepository } from "./userRepository";
import { MockLoginRepository } from "./mock/mockLoginRepository";
import { MockUserRepository } from "./mock/mockUserRepository";
import { Logger } from "../loggers/logger";

const repositories: any = {
    LoginRepository,
    UserRepository,
};

const mockRepositories: any = {
    MockLoginRepository,
    MockUserRepository,
};

export class RepositoryFactory {
    public static get(name: string): IRepository {
        Logger.getLogger().info(`EnvName=${process.env.VUE_APP_ENV_NAME}`);
        const useMock: boolean = this.toBoolean(process.env.VUE_APP_USE_MOCK);

        const className: string = useMock ? `Mock${name}Repository` : `${name}Repository`;
        Logger.getLogger().debug(`Repository:${className} dynamic create.`);

        return useMock ? new mockRepositories[className](name) : new repositories[className](name);
    }

    private static toBoolean(booleanStr: string | undefined): boolean {
        if (!booleanStr) {
            return false;
        }
        return booleanStr.toLowerCase() === "true";
    }
}
