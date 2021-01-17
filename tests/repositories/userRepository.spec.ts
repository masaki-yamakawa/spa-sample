import { RepositoryFactory } from "@/repositories/repositoryFactory";
import { IUserRepository, UserRepository } from "@/repositories/userRepository";
import { MockUserRepository } from "@/repositories/mock/mockUserRepository";

describe("userRepository", () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...OLD_ENV };
        delete process.env.NODE_ENV;
    });

    afterEach(() => {
        process.env = OLD_ENV;
    });

    it("should return MockUserRepository with fixed response", async () => {
        process.env.VUE_APP_USE_MOCK = "true";

        const repos: IUserRepository = RepositoryFactory.get("User") as IUserRepository;
        const res = await repos.find();

        expect(repos.constructor).toBe(MockUserRepository);
        expect(repos.constructor).not.toBe(UserRepository);
        expect(res.data).toEqual([
            { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald", type: "A", created_at: "2020/01/01", updated_at: "2020/01/01" },
            { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw", type: "B", created_at: "2020/01/01", updated_at: "2020/01/01" },
            { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson", type: "C", created_at: "2020/01/01", updated_at: "2020/01/01" },
            { isActive: true, age: 38, first_name: "Jami", last_name: "Carney", type: "A", created_at: "2020/01/01", updated_at: "2020/01/01" },
        ]);
    });
});
