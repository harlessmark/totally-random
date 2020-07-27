# totally-random

A utility class to help with random number generation.

---

## Installation

```javascript
npm i totally-random
```

### Importing

```javascript
const TotallyRandom = require("totally-random");
const random = new TotallyRandom();
```

You may also import this package from [unpkg](https://unpkg.com/browse/totally-random/) for browser use.

---
## Usage

All numbers are _inclusive_. Optional parameters are in `[ ]`

### `.between()`
Returns a random number between two specified numbers.

Requires two parameters: the beginning number and the ending number of the range. 

Accepts an optional third parameter, an array length, which allows it to return an array containing the specified number of random numbers.

```javascript
random.range(25, 50);
// 34

random.range(100, 200, 3);
// [192, 125, 167]
```

### `.boolean()`

### `.color()`
Returns a random color in the form of a hex value or RGB value.

#### Example
```javascript
random.color();
// #3bf93d

random.color("rgb");
// rgb(61, 134, 160)
```

### `.from()`
Returns a random element from an array. 

Requires one parameter: an array. 

Accepts an optional second parameter, an array length, which allows it to return an array containing the specified number of random elements.

#### Example
```javascript
random.from(["Paul", "Chani", "Gurney"]);
// Chani

random.from(["Paul", "Chani", "Gurney"], 5);
// ["Gurney", "Paul", "Gurney", "Chani", "Chani"]
```

### `.percent()`
Returns a random percentage (0 - 100).

```javascript
random.percent();
// 27
```
### `.shuffle()`

### `.string()`
Returns a random string. Accepts two optional parameters: length, and type (alphanumeric, alpha-only, numeric-only). 

If no parameters are included, it will return a 16-character alphanumeric string. 

If a number is passed, it will return an alphanumeric string of the that length.

If a string of "alpha" or "numeric" is passed, it will generate a 16-character string containing alpha-only or numeric-only characters, respectively.

If is number and a string of "alpha" or "numeric" is passed, it will generate a string of the given length of only the specified type

```javascript
random.string();
// hX4XHE2M6eyE9XM1

random.string(5);
// Us8dP

random.string("alpha");
// DCjWSnSOuSjKKqok

random.string("numeric");
// 9386263812837196

random.string(8, "alpha");
// ajmRmsEC
```

### `.to()`
Returns a random number between 1 and the number you specify, a negative number may also be used. 
Requires one parameter: a number.

```javascript
random.to(10);
// 7

random.to(-99);
// -64
```

---
## Override `Math.random()`
If you use an API or another technique to get more random numbers (i.e. [RANDOM.org](https://random.org/)) you may supply your own function in the constructor. It must return a floating point number between 0 and 1, not including 1.

```javascript
const random = new TotallyRandom(randomFunction);
```

---
## Contributing

Pull requests are welcome if they are related to practical random generation.

For major changes, please open an issue first to discuss what you would like to change.

---
## License

This project is licensed under the [MIT License](LICENSE).