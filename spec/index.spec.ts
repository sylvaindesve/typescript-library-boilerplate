// tslint:disable:no-unused-expression
import { expect } from "chai";
import "mocha";
import { sayHello } from "../src";

describe("sayHello", () => {
  it("says hello", () => {
    expect(sayHello("you")).to.equal("Hello you !");
  });
});
