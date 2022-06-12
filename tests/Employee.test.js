const Employee = require("../lib/Employee");

describe("Employee", () => {
    //Setup employee object
    const name = "Abdalla";
    const id = "123";
    const email = "123@abc.com"
    const obj = new Employee(name,id,email);
    
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
    describe("getRole", () => {
        it("Function should return Employee", () => {
            expect(obj.getRole()).toEqual("Employee");
        });
    });
});