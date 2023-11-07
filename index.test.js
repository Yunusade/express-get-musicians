// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./src/app");
const seedMusician = require("./seedData");

describe("./musicians endpoint", () => {
  // Write your tests here

  test("Testing Musician Endpoint", async () => {
    const response = await request(app).get("/musicians");
    expect(response.statusCode).toBe(200);
  });

  test("Testing Musician Response", async () => {
    const response = await request(app).get("/musicians");
    const responseData = JSON.parse(response.text)[0];
    expect(responseData.name).toBe("Mick Jagger");
  });

  test("testing single musician endpoint", async () => {
    const response = await request(app).get("/musicians/1");
    const data = JSON.parse(response.text);
    expect(data.name).toBe("Mick Jagger");
  });

  test("testing post musician", async () => {
    const post = await request(app).post("/musicians").send({
      name: "The odos",
      instrument: 'Guitar'
    });
    const data = JSON.parse(post.text)
    expect(data.name).toBe("The odos")
  });

  test("Testing Put musician", async () => {
    const putMusician = await request(app).put("/musicians/4").send({
      name: "The Brimers",
      instrument: 'Guitar'
    });
    const response = await request(app).get("/musicians/4");
    const data = JSON.parse(response.text)
    expect(data.name).toBe("The Brimers")
  })
});