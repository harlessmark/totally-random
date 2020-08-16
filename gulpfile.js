const { src, dest } = require("gulp");

const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const eslint = require("gulp-eslint");
const umd = require("gulp-umd");

exports.default = function () {
  return src("src/**")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(
      umd({
        // eslint-disable-next-line no-unused-vars
        exports(file) {
          return "TotallyRandom";
        },
      })
    )
    .pipe(dest("dist/"));
};
