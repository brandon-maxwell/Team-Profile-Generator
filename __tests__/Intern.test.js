const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("should create an object with Interns name, id, email, intern's school for Intern", () => {
        const intern = new Intern("Liam", 123, "liam@gmail.com", "Wash U");
        expect(intern.school).toEqual("Wash U");
    });
})

describe("getRole", () => {
    it("returns role", () => {
        expect(new Intern("Intern").getRole()).toBe("Intern")
    });
})
