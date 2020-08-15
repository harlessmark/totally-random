const countError = new Error("count must be greater than 1");

class TotallyRandom {
  // all numbers are inclusive
  // methods in alphabetical order
  constructor(randomizer = Math.random) {
    this.randomizer = randomizer;
  }

  /**
   * Returns a random user-given data type, or array of random user-given data types, from a given array
   *
   * @param {array} arr Array containing values to be randomly selected
   * @param {number} [count=1] Amount of user-given data types to return (optional)
   * @param {boolean} [unique=false] If output array should include duplicate user-given data types (optional)
   *
   * @returns {(*|Array)} A user-given data type, or array of random elements, of given length
   */

  array(arr, count = 1, unique = false) {
    if (count < 1) throw countError;
    if (arr.length < count && unique) {
      throw new Error(
        "Array length must be larger than count if unique = true"
      );
    }

    let newArr = [...Array(count)].map(() => arr[this.to(arr.length - 1)]);

    if (unique) {
      newArr = [...new Set(newArr)];

      while (newArr.length < count) {
        const addElem = arr[this.to(arr.length - 1)];

        if (!newArr.includes(addElem)) newArr.push(addElem);
      }
    }

    return count === 1 ? newArr[0] : newArr;
  }

  /**
   * Return a random number, or array of random numbers, within a given range
   *
   * @param {number} num1 First number of the range
   * @param {number} num2 Last number of the range
   * @param {number} [count=1] Amount of numbers to return (optional)
   *
   * @returns {(number|array)} A random number, or array of random numbers, within the specified range
   */

  between(num1, num2, count = 1) {
    if (num1 === num2) throw new Error("num1 cannot equal num2");
    if (count < 1) throw countError;

    const arr = [...Array(count)].map(() =>
      Math.round(this.randomizer() * (num1 - num2) + num2)
    );

    return count === 1 ? arr[0] : arr;
  }

  /**
   * Return a random boolean or array of random booleans
   *
   * @param {number} [count=1] Amount of numbers to return (optional)
   *
   * @returns {(boolean|array)} A random boolean or array of booleans
   */

  boolean(count = 1) {
    if (count < 1) throw countError;

    const arr = [...Array(count)].map(() => {
      if (this.to(2) === 1) return true;
      return false;
    });

    return count === 1 ? arr[0] : arr;
  }

  /**
   * Return a random user-give data type, or an array of random user-given data types, based on a rigged chance
   *
   * @param {array} arr Array of arrays containing a data type and percent chance
   * @param {number} [count=1] Amount of data types to return (optional)
   *
   * @returns {*} A random user-given data type or an array of random user-given data types
   */

  chance(arr, count = 1) {
    if (count < 1) throw countError;
    // checks if sum of percentages is 100
    const total = arr.reduce((acc, curr) => acc + curr[1], 0);
    if (total !== 100) throw new Error("sum of percentages must equal 100");

    const newArr = [];
    const sorted = arr.sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < count; i++) {
      const percent = this.to(100);
      let sum = 0;

      for (let j = 0; j < sorted.length; j++) {
        sum += sorted[j][1];
        if (sum >= percent) {
          newArr.push(sorted[j][0]);
          break;
        }
      }
    }

    return count === 1 ? newArr[0][0] : newArr;
  }

  /**
   * Return a random hex code, RGB, RGBA, HSL, or HSLA color value
   *
   * @param {string} [option="hex"] Flag to change output type, valid options are: "hex", "rgb", "rgba", "hsl", "hsla" (optional)
   * @param {number} [count=1] Amount of color strings to return
   *
   * @returns {string|array} - A random hex, RGB, RGBA, HSL, or HSLA color value or array of values
   */

  color(option = "hex", count = 1) {
    if (count < 1 || parseFloat(option) < 1) throw countError;

    const getRgbValue = () => {
      return [...Array(3)].map(() => this.between(0, 255)).join(", ");
    };

    const getHslValue = () => {
      const h = this.between(0, 360);
      const sl = [...Array(2)].map(() => `${this.percent()}%`);
      return [h, ...sl].join(", ");
    };

    const getColor = (c) => {
      switch (c) {
        case "rgb":
          return `rgb(${getRgbValue()})`;
        case "rgba":
          return `rgba(${getRgbValue()}, ${this.randomizer().toFixed(2)})`;
        case "hsl":
          return `hsl(${getHslValue()})`;
        case "hsla":
          return `hsla(${getHslValue()}, ${this.randomizer().toFixed(2)})`;
        default:
          // returns random hex code (string)
          return `#${((this.randomizer() * 0xffffff) << 0).toString(16)}`;
      }
    };

    const colorCount = parseFloat(option) === +option ? option : count;
    const colorOption = parseFloat(option) === +option ? "hex" : option;

    const arr = [...Array(colorCount)].map(() => getColor(colorOption));

    return colorCount === 1 ? arr[0] : arr;
  }

  /**
   * // TODO: finish
   * Return a random float value
   *
   * @param {number} [count=1] Amount of floats to return (optional)
   *
   * @returns {(number|array)} A random float or array of random floats
   */

  floatTo(num, count = 1) {
    if (count < 1) throw countError;

    const arr = [...Array(count)].map(
      () => this.to(num - 1) + this.randomizer()
    );

    return count === 1 ? arr[0] : arr;
  }

  /**
   * Return a random percentage value
   *
   * @param {number} [count=1] Amount of numbers to return (optional)
   *
   * @returns {(number|array)} A random number, or array of random numbers, between 0 and 100
   */

  percent(count = 1) {
    if (count < 1) throw countError;

    const arr = [...Array(count)].map(() =>
      Math.round(this.randomizer() * 100)
    );

    return count === 1 ? arr[0] : arr;
  }

  /**
   * Return a shuffled array of a given array using the Fisher-Yates Algorithm
   *
   * @param {array} arr Array of values to shuffle
   *
   * @returns {array} A shuffled array
   */

  shuffle(arr) {
    if (arr.length < 2) {
      throw new Error("arr must contain at least two elements");
    }

    let j;
    let x;
    let i;

    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(this.randomizer() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return arr;
  }

  /**
   * Return a string
   *
   * @param {string} [option="alphanumeric"] Specifies the type of string, valid options are: "alphanumeric", "alpha", "numeric" (optional)
   * @param {number} [length=0] Specifies the length of the string (optional)
   *
   * @returns {string} - A random string
   */

  string(option = "alphanumeric", length = this.between(4, 24)) {
    if (length < 1) throw new Error("length must be at least 1");

    const alphas = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
    const nums = [..."0123456789"];
    const alphanums = [...alphas, ...nums];

    // set stringLength equal to [option] and stringOption to alphanumeric if only the [length] argument is provided
    const stringLength = parseFloat(option) === +option ? option : length;
    const stringOption =
      parseFloat(option) === +option ? "alphanumeric" : option;

    const generator = (arr, len) =>
      [...Array(len)]
        .map(() => arr[(this.randomizer() * arr.length) | 0])
        .join("");

    switch (stringOption) {
      case "alpha":
        return generator(alphas, stringLength);
      case "numeric":
        return generator(nums, stringLength);
      default:
        return generator(alphanums, stringLength);
    }
  }

  /**
   * Return a random number between 1 and positive number or -1 and negative number
   *
   * @param {number} num Max number of the range excluding 0
   * @param {number} [count=1] Amount of numbers to return (optional)
   *
   * @returns {(number|array)} - A random number or array of numbers
   */

  to(num, count = 1) {
    if (count < 1) throw countError;

    const arr = [...Array(count)].map(() =>
      Math.round(Math.ceil(this.randomizer() * num + (num > 0 ? 1 : 0)) - 1)
    );

    return count === 1 ? arr[0] : arr;
  }
}

TotallyRandom.prototype.colour = TotallyRandom.prototype.color;

module.exports = TotallyRandom;
