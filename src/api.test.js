const { it, describe } = require("mocha");
const supertest = require("supertest");
const assert = require("assert");
const app = require("./api");

describe("API Suite test", () => {
  describe("notFound - 404", () => {
    it("should request a nonexistent page and return HTTP Status 404", async () => {
      const response = await supertest(app)
        .get("/nonexisting-page")
        .expect(404);

      assert.strictEqual(response.text, "Not found");
    });
  });

  describe("/contact", () => {
    it("should request the contact route and return HTTP Status 200", async () => {
      const response = await supertest(app).get("/contact").expect(200);

      assert.strictEqual(response.text, "Contact Us Page");
    });
  });

  describe("/login", () => {
    it("should request the login route and return HTTP Status 200", async () => {
      const response = await supertest(app)
        .post("/login")
        .send({ username: "joaozin", password: "123" })
        .expect(200);

      assert.strictEqual(response.text, "Logged!");
    });

    it("should request the login route and return HTTP Status 401 if the password or username is invalid", async () => {
      const response = await supertest(app)
        .post("/login")
        .send({ username: "Matheus", password: "123" })
        .expect(401);

      assert.strictEqual(response.text, "Login failed");
    });
  });
});
