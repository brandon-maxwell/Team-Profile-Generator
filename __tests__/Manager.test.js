const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("should create an object with Employee data + office number for Manager", () => {
        const manager = new Manager("Hannah", 111, "hannah@gmail.com", 5555555555);
        expect(manager.officeNumber).toEqual(5555555555);
    });
})

describe("getRole", () => {
    it("returns role", () => {
        expect(new Manager("Manager").getRole()).toBe("Manager")
    });
})
