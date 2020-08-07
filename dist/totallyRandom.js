class TotallyRandom {
    // all numbers are inclusive
    // alphabetical order
    constructor(randomFunction = Math.random) {
        this.randomFunction = randomFunction;
    }

    /**
     * @method between - Return a number, or array of numbers, within a given range
     * @param {Number} num1 - The beginning number of the range
     * @param {Number} num2 - The ending number of the range
     * @param {Number} [count=1] - The amount of numbers in the array (Optional)
     * @returns {(Number|Array)} - A random number, or array of numbers of given length [count], within the specified range [num1 thru num2]
     */
    between(num1, num2, count = 1) {
        if (count === 1) {
            // returns a random number between num1 and num2 (inclusive)
            return Math.round(this.randomFunction() * (num1 - num2) + num2);
        } else if (count > 1) {
            let arr = [];

            for (let i = 0; i < count; i++) {
                // returns an array of [count] numbers
                const num = Math.round(this.randomFunction() * (num1 - num2) + num2);
                arr.push(num);
            }

            return arr;
        }
    }

    /**
     * @method boolean - Return a boolean or array of booleans
     * @param {Number} [count=1] - The amount of booleans in the array (Optional)
     * @returns {(Boolean|Array)} - A random boolean, or array of booleans of given length [count]
     */
    boolean(count = 1) {
        if (this.to(2) === 1 && count === 1) {
            return true;
        } else if (this.to(2) === 2 && count === 1) {
            return false;
        } else {
            let arr = [];

            for (let i = 0; i < count + 1; i++) {
                // returns an array of [count] booleans
                if (this.to(2) === 1) {
                    arr.push(true);
                } else if (this.to(2) === 2) {
                    arr.push(false);
                }
            }

            return arr;
        }
    }

    /**
     * @method color - Return a Hex code, RGB, RGBA, HSL, or HSLA value color
     * @param {String} [option="hex"] - Flag to change output type, valid options are: "hex", "rgb", "rgba", "hsl", "hsla" (Optional)
     * @returns {String} - A random Hex, RGB, RGBA, HSL, or HSLA color value
     */

    color(option = "hex") {
        if (option === "hex") {
            // returns random hex code (string)
            return `#${((this.randomFunction() * 0xffffff) << 0).toString(16)}`;
        } else if (option === "rgb") {
            // returns random rgb color (string)
            return `rgb(
				${this.between(0, 255)}, 
				${this.between(0, 255)}, 
				${this.between(0, 255)}
			)`;
        } else if (option === "rgba") {
            // returns random rgba color (string)
            return `rgba(
				${this.between(0, 255)}, 
				${this.between(0, 255)}, 
				${this.between(0, 255)},
				${this.randomFunction().toFixed(2)}
			)`;
        } else if (option === "hsl") {
            // returns random hsl color (string)
            return `hsl(
				${this.between(0, 360)},
				${this.percent()}%,
				${this.percent()}%
			)`;
        } else {
            // returns random hsla color (string)
            return `hsla(
				${this.between(0, 360)},
				${this.percent()}%,
				${this.percent()}%,
				${this.randomFunction().toFixed(2)}
			)`;
        }
    }

    /**
     * @method from - Return a random element, or array of a given count of random elements, from a given array
     * @param {Array} arr - Array containing values
     * @param {Number} [count=1] - Amount of elements to include in the output array (Optional)
     * @returns {(Element|Array)} - A random element from [arr], or array of random elements of given length [count] from [arr]
     */
    from(arr, count = 1) {
        if (count === 1) {
            // returns random element from [arr]
            return arr[Math.floor(this.randomFunction() * arr.length)];
        } else {
            // returns an array of [count] elements
            let newArr = [];

            for (let i = 0; i < count; i++) {
                newArr.push(arr[Math.floor(this.randomFunction() * arr.length)]);
            }

            return newArr;
        }
    }

    /**
     * @method percent - Return a random percentage value
     * @param {Number} [count=1] - The amount of numbers in the array (Optional)
     * @returns {Number} - A number between 0 and 100
     */
    percent(count = 1) {
        if (count === 1) {
            return Math.round(this.randomFunction() * 100);
        } else {
            let arr = [];

            for (let i = 0; i < count; i++) {
                arr.push(Math.round(this.randomFunction() * 100));
            }

            return arr;
        }
    }

    /**
     * @method shuffle - Return a shuffled version of a given array using the Fisher-Yates Algorithm
     * @param {Array} arr - Array of values to shuffle
     * @returns {Array} - A shuffled version of [arr]
     */
    shuffle(arr) {
        let j, x, i;

        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(this.randomFunction() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }

        return arr;
    }

    /**
     * @method string - Return a random string
     * @param {String} [option="alphanumeric"] - Specifies the type of string, valid options are: "alphanumeric", "alpha", "numeric" (Optional)
     * @param {Number} [length=0] - Specifies the length of the string (Optional)
     * @returns {String} - A random string
     */
    string(option = "alphanumeric", length = this.between(3, 24)) {
        const alphas = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
        const nums = [..."0123456789"];
        const alphanums = [...alphas, ...nums];

        // set [length] equal to [option] and [option] to alphanumeric if only the [length] argument is provided
        if (!isNaN(option)) {
            length = option;
            option = "alphanumeric";
        }

        const generator = (arr, len) => {
            return [...Array(len)]
                .map(ltr => arr[(this.randomFunction() * arr.length) | 0])
                .join("");
        };

        switch (option) {
            case "alpha":
                return generator(alphas, length);
            case "alphanumeric":
                return generator(alphanums, length);
            case "numeric":
                return generator(nums, length);
        }
    }

    /**
     * @method to - Return a random number between 1 or -1 and a given number
     * @param {Number} num - The max number of the range excluding 0
     * @param {Number} [count=1] - The amount of numbers in the array (Optional), less than 1 is ignored
     * @returns {(Number|Array)} - A random number, or array of numbers of given length [count]
     */
    to(num, count = 1) {
        if (isNaN(num) || num === 0) {
            throw 'Please ensure num is a number and not zero.';
        }

        if (isNaN(count) || Number(count).toFixed(0) !== count.toString() || count < 1) {
            throw 'Please ensure count is a positive integer';
        }

        if (count > 1) {
            const arr = [];
            for (let i = 0; i < count; i++) {
                arr.push(Math.floor(Math.ceil(this.randomFunction() * num + (num > 0 ? 1 : 0)) - 1));
            }
            return arr;
        }

        return Math.round(this.randomFunction()) + (num > 0 ? 0 : -1);
    }
}

module.exports = TotallyRandom;
