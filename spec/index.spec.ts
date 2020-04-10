// tslint:disable:no-unused-expression
import { expect } from "chai";
import "mocha";
import { sayHello } from "../src";
import { cli } from "./support/cli";

describe("sayHello", () => {
  it("says hello", () => {
    expect(sayHello("you")).to.equal("Hello you !");
  });
});

// Test by invoking the script from the command line
// !!! These tests are slower so use with parcimony
describe("typescript-library-boilerplate", () => {
  it("says hello to John", async () => {
    const result = await cli([], ".");
    expect(result.code).to.eq(0);
    expect(result.stdout).to.contain("Hello John !");
  });
});
