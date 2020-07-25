# totally-random

A utility class to help with random number generation.

## Usage

All numbers are _inclusive_.

### Importing

```javascript
const TotallyRandom = require("totally-random");
const random = new TotallyRandom();
```
You can also import this package from [unpkg](https://unpkg.com/browse/totally-random@1.0.6/) for browser use.
### Between 1 and num

```javascript
random.to(10)
// 1-10

random.to(-99)
// (-1)-(-99)
```

### Between 2 numbers

```javascript
random.range(25, 50)
// 25-50

random.range(100, 200, 3)
// [100-200, 100-200, 100-200]
```

### From an array

```javascript
random.fromArray(['Paul', 'Chani', 'Gurney'])
// Paul, Chani, or Gurney

random.fromArray(['Paul', 'Chani', 'Gurney'], 5)
// returns an array of 5 randomly selected elements from array
```

### Percentage

```javascript
random.percent()
// 0-100
```

### Color

```javascript
random.color()
// #3bf93d

random.color('rgb')
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

## License

This project is licensed under the [MIT License](LICENSE).
