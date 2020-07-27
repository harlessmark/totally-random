class TotallyRandom {
	// all numbers are inclusive
	// alphabetical order
	constructor(randomFunction = Math.random) {
		this.randomFunction = randomFunction;
	}

	between(num1, num2, count = 1) {
		if (count === 1) {
			// returns a random number(s) between passed numbers (inclusive)
			return Math.round(this.randomFunction() * (num1 - num2) + num2);
		} else if (count > 1) {
			let arr = [];

			for (let i = 0; i < count; i++) {
				// returns an array of count numbers
				const num = Math.round(this.randomFunction() * (num1 - num2) + num2);
				arr.push(num);
			}

			return arr;
		}
	}

	boolean(count = 1) {
		// returns a random boolean(s)
		if (this.to(2) === 1 && count === 1) {
			return true;
		} else if (this.to(2) === 2 && count === 1) {
			return false;
		} else {
			let arr = [];

			for (let i = 0; i < count + 1; i++) {
				if (this.to(2) === 1) {
					arr.push(true);
				} else if (this.to(2) === 2) {
					arr.push(false);
				}
			}

			return arr;
		}
	}

	color(option = "hex") {
		if (option === "hex") {
			// returns random hex code
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
				${this.to(360)},
				${this.percent()}%,
				${this.percent()}%
			)`;
		} else {
			return `hsla(
				${this.to(360)},
				${this.percent()}%,
				${this.percent()}%,
				${this.randomFunction().toFixed(2)}
			)`;
		}
	}

	from(arr, count = 1) {
		if (count === 1) {
			// returns random element from array
			return arr[Math.floor(this.randomFunction() * arr.length)];
		} else {
			// returns an array of count elements
			let newArr = [];

			for (let i = 0; i < count; i++) {
				newArr.push(arr[Math.floor(this.randomFunction() * arr.length)]);
			}

			return newArr;
		}
	}

	percent() {
		// returns a number between 0-100
		return Math.round(this.randomFunction() * 100);
	}

	shuffle(arr) {
		// shuffles an array (Fisher-Yates algorithm)
		let j, x, i;

		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(this.randomFunction() * (i + 1));
			x = arr[i];
			arr[i] = arr[j];
			arr[j] = x;
		}

		return arr;
	}

	string(length = 16, type = "alphanumeric") {
		// alpha/numeric generator
		const alphas = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
		const nums = [..."0123456789"];
		const alphanums = [...alphas, ...nums];

		if (isNaN(length)) {
			type = length;
			length = 16;
		}

		const generator = (arr, len) => {
			return [...Array(len)]
				.map(ltr => arr[(this.randomFunction() * arr.length) | 0])
				.join("");
		};

		switch (type) {
			case "alpha":
				return generator(alphas, length);
			case "alphanumeric":
				return generator(alphanums, length);
			case "numeric":
				return generator(nums, length);
		}
	}

	to(num) {
		if (num > 0) {
			// returns a number between 1 and num
			return Math.floor(Math.ceil(this.randomFunction() * num + 1) - 1);
		} else if (num < 0) {
			// returns a number between -1 and num
			return Math.floor(Math.ceil(this.randomFunction() * num) - 1);
		}
	}
}

module.exports = TotallyRandom;
