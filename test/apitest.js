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
        it("can display data", () => {
            request("/", (req, res) => {
                expect(res[0].name).to.equal("final fantasy 8");
            })
        })
    })
})
