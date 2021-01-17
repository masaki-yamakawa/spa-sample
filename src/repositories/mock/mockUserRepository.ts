import { ObjectLiteral, Repository } from "../repository";
import { IUserRepository } from "../userRepository";

export class MockUserRepository extends Repository implements IUserRepository {
    public async find(url: string, parameters: ObjectLiteral): Promise<any> {
        const allResults = [
            { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald", type: "A", created_at: "2020-01-01", updated_at: "2020-11-23" },
            { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw", type: "B", created_at: "2020-01-10", updated_at: "2020-01-23" },
            { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson", type: "C", created_at: "2020-01-20", updated_at: "2020-11-25" },
            { isActive: true, age: 38, first_name: "Jami", last_name: "Carney", type: "A", created_at: "2020-01-30", updated_at: "2020-11-25" },
        ];

        let results = allResults;
        if (parameters.name !== "") {
            results = results.filter((item) => item.first_name === parameters.name);
        }
        if (parameters.type !== "all") {
            results = results.filter((item) => item.type === parameters.type);
        }
        if (parameters.updatedAt !== "") {
            results = results.filter((item) => item.updated_at === parameters.updatedAt);
        }

        return {
            data: results,
        };
    }
}
