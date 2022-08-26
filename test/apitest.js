const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../server/index");
describe("API tests", () => {
    let request;
    beforeEach(() => {
        request = chai.request(app);

    })
    describe("alldata", () => {
        it("can display data", (done) => {
             request.get("/").end((err, res) => {
                chai.expect(res.body[0].name).is.equal("stray");
                done();
            })
        })
    })
})
