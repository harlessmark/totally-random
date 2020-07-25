class TotallyRandom {
	// all numbers are inclusive
	color(option = "hex") {
		if (option === "hex") {
			// returns random hex code
			const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
			let hex = "#";

			let items = this.fromArray(arr, 6);
			items.forEach(item => (hex += item));

			return hex;
		} else if (option === "rgb") {
			// returns random rgb color (string)
			return `rgb(${this.range(0, 255)}, ${this.range(0, 255)}, ${this.range(
				0,
				255
			)})`;
		}
	}

	positionOnScreen() {
		const position = {
			top: `${this.range(1, 100)} vw`,
			left: `${this.range(1, 100)} vh`
		}
		return position;
	}

	fromArray(arr, count = 1) {
		if (count === 1) {
			// returns random element from array
			return arr[Math.floor(Math.random() * arr.length)];
		} else {
			// returns an array of count elements
			let newArr = [];

			for (let i = 0; i < count; i++) {
				newArr.push(arr[Math.floor(Math.random() * arr.length)]);
			}

			return newArr;
		}
	}

	percent() {
		// returns a number between 0-100
		return Math.round(Math.random() * 100);
	}

	range(num1, num2, count = 1) {
		if (count === 1) {
			// returns a random number(s) between passed numbers (inclusive)
			return Math.round(Math.random() * (num1 - num2) + num2);
		} else if (count > 1) {
			let arr = [];

			for (let i = 0; i < count; i++) {
				// returns an array of count numbers
				const num = Math.round(Math.random() * (num1 - num2) + num2);
				arr.push(num);
			}

			return arr;
		}
	}

	fromObj(obj, count = 1) {
		var a = [];
		for (let i in obj) {
			a.push(i);
		}
		return this.fromArray(a, count);
	}

	to(num) {
		if (num > 0) {
			// returns a number between 1 and num
			return Math.floor(Math.ceil(Math.random() * num + 1) - 1);
		} else if (num < 0) {
			// returns a number between -1 and num
			return Math.floor(Math.ceil(Math.random() * num) - 1);
		}
	}
}

export TotallyRandom;
