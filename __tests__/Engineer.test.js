const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("should create an object with Employee data + github username for Engineer", () => {
        const engineer = new Engineer("Wyatt", 321, "wyatt@gmail.com", "wyatt123");
        expect(engineer.github).toEqual("wyatt123");
    });
})

describe("getRole", () => {
    it("returns role", () => {
        expect(new Engineer("Engineer").getRole()).toBe("Engineer")
    });
})
