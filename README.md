# totally-random

A utility class to help with random number generation.

## Usage

All numbers are _inclusive_.

### Importing

```
import { TotallyRandom } from "totally-random";
const random = new TotallyRandom();
```

### Between 1 and num

```
random.to(10)
// 1-10

random.to(-99)
// (-1)-(-99)
```

### Between 2 numbers

```
random.range(25, 50)
// 25-50

random.range(100, 200, 3)
// [100-200, 100-200, 100-200]
```

### From an array

```
random.fromArray(['Paul', 'Chani', 'Gurney'])
// Paul, Chani, or Gurney

random.fromArray(['Paul', 'Chani', 'Gurney'], 5)
// returns an array of 5 randomly selected elements from array
```

### Percentage

```
random.percent()
// 0-100
```

### Color

```
random.color()
// #3bf93d

random.color('rgb')
// rgb(61, 134, 160)
```

## License

This project is licensed under the [MIT License](LICENSE).
