# totally-random

A utility class to help with random number generation.

## Usage

All numbers are _inclusive_.

### Importing

```javascript
const TotallyRandom = require("totally-random");
const random = new TotallyRandom();
```

You can also import this package from [unpkg](https://unpkg.com/browse/totally-random/) for browser use.

If you use some API or other techniques to get more random numbers, you can supply your own function in the constructor. It must return a floating point number between 0 and 1, not including 1.

### Between 1 and num

```javascript
random.to(10);
// 1-10

random.to(-99);
// (-1)-(-99)
```

### Between 2 numbers

```javascript
random.range(25, 50);
// 25-50

random.range(100, 200, 3);
// [100-200, 100-200, 100-200]
```

### From an array

```javascript
random.fromArray(["Paul", "Chani", "Gurney"]);
// Paul, Chani, or Gurney

random.fromArray(["Paul", "Chani", "Gurney"], 5);
// returns an array of 5 randomly selected elements from array
```

### Percentage

```javascript
random.percent();
// 0-100
```

### Color

```javascript
random.color();
// #3bf93d

random.color("rgb");
// rgb(61, 134, 160)
```

### Random Position

```javascript
random.positionOnScreen();
/*
{
  top: '54 vw',
  left: '32 vh'
}
*/
```

### String

```javascript
random.string();
// returns an alphanumeric 16 character string, ex: hX4XHE2M6eyE9XM1

random.string(5);
// returns an alphanumeric 5 character string, ex: Us8dP

random.string("alpha");
// returns an alpha-only 16 character string, ex: DCjWSnSOuSjKKqok

random.string("numeric");
// returns a numeric-only 16 character string, ex: 9386263812837196

random.string(5, "alpha");
// returns an alpha-only 5 character string, ex: ajmRm
```

## Contributing

Pull requests are welcome if they are related to practical random generation. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).
