const {mongoose} = require('../server/index');
const items = require('../server/Items');

const newItems = [
    {
        name: "book1"
    },
    {
        name: "book2",
    },
    {
        name: "book3"
    }
];
function testSeed(mode) {
    if (mode === "insert") {
        items.insertMany(newItems,(err) => console.log(err));
    } else {
        items.deleteMany({}, (err) => console.log(err));
    }
}

module.exports = {testSeed};