# instance-of-name
Checks the prototypical chain of an object and compares each constructor's name against the value.

## Installation
```shell
npm install instance-of-name
```

## API
### `instanceOf(object, className)`
#### Arguments
* object `object` The object to check
* string `className` The name of the constructor function

## Usage
```
import instanceOf from 'instance-of-name';

class Car {}
class Ford extends Car {}
class Focus extends Ford {}

let focus = new Focus();
focus instanceof Focus; // true
focus instanceof Ford; // true
focus instanceof Car; // true
focus instanceof Object; // true
focus instanceof Array; // false

instanceOf(focus, 'Focus'); // true
instanceOf(focus, 'Ford'); // true
instanceOf(focus, 'Car'); // true
instanceOf(focus, 'Object'); // true
instanceOf(focus, 'Array'); // false
```
