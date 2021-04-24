const bcrypt = require('bcrypt');

let pswrd = bcrypt.hashSync('1234', 9);
console.log(pswrd)