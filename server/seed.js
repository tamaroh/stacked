const mng = require('mongoose');

const Cat = mng.model("Cat", {name: String});
const kitty = new Cat({ name: 'Zildian"'});
kitty.save().then(() => console.log('meow'))

Cat.find().then(res => console.log(res))



