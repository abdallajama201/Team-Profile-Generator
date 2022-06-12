const Intern = require("../lib/Intern");

describe("Intern", () => {
    //Setup intern object
    const name = "Abdalla";
    const id = "123";
    const email = "123@abc.com"
    const school = "any"
    const obj = new Intern(name,id,email,school);

    describe("Initialization", () => {
        it("Object should have name property", () => {
            expect(obj.name).toEqual(name);
        });
        it("Object should have id property", () => {
            expect(obj.id).toEqual(id);
        });
        it("Object should have email property", () => {
            expect(obj.email).toEqual(email);
        });
        it("Object should have email property", () => {
            expect(obj.school).toEqual(school);
        });
    });
    describe("getName", () => {
        it("Function should return name", () => {
            expect(obj.getName()).toEqual(name);
        });
    });
    describe("getId", () => {
        it("Function should return id", () => {
            expect(obj.getId()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("Function should return email", () => {
            expect(obj.getEmail()).toEqual(email);
        });
    });
    describe("getSchool", () => {
        it("Function should return school", () => {
            expect(obj.getSchool()).toEqual(school);
        });
    });
    describe("getRole", () => {
        it("Function should return Intern", () => {
            expect(obj.getRole()).toEqual("Intern");
        });
    });
});