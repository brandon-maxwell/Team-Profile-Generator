const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("should create an object with name, id, and email values for Employee", () => {
        const employee = new Employee("Jim", 13, "jim@test.com");
        expect(employee.name).toEqual("Jim");
        expect(employee.id).toEqual(13);
        expect(employee.email).toEqual("jim@test.com");
    });
});

describe("getRole", () => {
    it("returns role", () => {
        expect(new Employee("Employee").getRole()).toBe("Employee")
    });
})
