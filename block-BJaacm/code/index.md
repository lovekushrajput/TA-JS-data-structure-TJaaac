```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true
- `user === newUser;` // true
//user and newUser are points to same address and both are non primitive data type.
- `user.name === newUser.name;`// true
- `user.name == newUser.name;` // true
// user.name and newUser.name are  points 'Arya' and name data type is primitive data so output is true.
- `user.sibling == newUser.sibling;`// true
- `user.sibling === newUser.sibling;`// true
// user.sibling and newUser.sibling both are non primitive data type so first go to user variable and user pointing to address with key of sibling and this sibling key is also non  primitive type so this sibling is pointing to another address with key robb , ryan and john.
- `user.sibling == allBrothers;` // false
- `user.sibling === allBrothers;`// false
- `brothersCopy === allBrothers;`// false
- `brothersCopy == allBrothers;`// false
// brothersCopy and allBrothers both are pointing to a different address.
- `brothersCopy == user.sibling;`// true
- `brothersCopy === user.sibling;`// true
// brothersCopy and user.sibling are pointing to same address .
- `brothersCopy[0] === user.sibling[0];` // true
- `brothersCopy[1] === user.sibling[1];` // true
- `user.sibling[1] === newUser.sibling[1];` // true
 brothersCopy and user.sibling are  points to same address.
