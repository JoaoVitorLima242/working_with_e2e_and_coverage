const { it, describe, afterEach, beforeEach } = require("mocha");
const supertest = require("supertest");
const assert = require("assert");
const app = require("./api");

describe("API Suite test", () => {
  beforeEach((done) => {
    const app = require("./api");
    app.once("listening", done);
  });
  
  afterEach((done) => app.close(done));

  describe("/contact", () => {
    it("should request the contact page and return HTTP Status 200", async () => {
      const response = await supertest(app).get("/contact").expect(200);

      assert.strictEqual(response.text, "Contact Us Page");
    });
  });
});
