const Manager = require("../lib/Manager");

describe("Manager", () => {
    //Setup manager object
    const name = "Abdalla";
    const id = "123";
    const email = "123@abc.com"
    const officeNumber = "321"
    const obj = new Manager(name,id,email,officeNumber);
    
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
        it("Object should have officeNumber property", () => {
            expect(obj.officeNumber).toEqual(officeNumber);
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
    describe("getOfficeNumber", () => {
        it("Function should return officeNumber", () => {
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
        });
    });
    describe("getRole", () => {
        it("Function should return Manager", () => {
            expect(obj.getRole()).toEqual("Manager");
        });
    });
});