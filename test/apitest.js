const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { app, mongoose } = require("../server/index");
const items = require("../server/Items");
const {testSeed} = require("./seed");

describe("API tests", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
    // seed data
    testSeed("insert");
  });
  afterEach( () => {
    // delete all data from DB
    testSeed();
  });
  describe("alldata", () => {
    it("can display data", (done) => {
      request.get("/").end((err, res) => {
        chai.expect(res.body[0].name).is.equal("book1");
        done();
      });
    });
  });
});
