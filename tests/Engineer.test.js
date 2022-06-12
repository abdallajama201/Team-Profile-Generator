const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    //Setup engineer object
    const name = "Abdalla";
    const id = "123";
    const email = "123@abc.com"
    const github = "abdalla"
    const obj = new Engineer(name,id,email,github);
    
    describe("Inialization", () => {
        it("Object should have name property", () => {
            expect(obj.name).toEqual(name);
        });
        it("Object should have id property", () => {
            expect(obj.id).toEqual(id);
        });
        it("Object should have email property", () => {
            expect(obj.email).toEqual(email);
        });
        it("Object should have github property", () => {
            expect(obj.github).toEqual(github);
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
    describe("getGithub", () => {
        it("Function should return github", () => {
            expect(obj.getGithub()).toEqual(github);
        });
    });
    describe("getRole", () => {
        it("Function should return Engineer", () => {
            expect(obj.getRole()).toEqual("Engineer");
        });
    });
});