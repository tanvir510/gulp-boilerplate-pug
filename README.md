# Using Packages

    "browser-sync": "^2.26.7",
    "browserslist": "^4.8.7",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^7.0.1",
    "gulp-concat": "^2.6.1",
    "gulp-csso": "^4.0.1",
    "gulp-imagemin": "^7.1.0",
    "gulp-minify-css": "^1.2.4",
    "gulp-postcss": "^8.0.0",
    "gulp-pug": "^4.0.1",
    "gulp-sass": "^4.0.2",
    "gulp-sourcemaps": "^2.6.5",
    "gulp-uglify": "^3.0.2",
    "pug": "^2.0.4"

# Gulp File Code

// Gulp Require File
const { src, dest, series, watch } = require("gulp");
const gulpSass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const minifyScss = require("gulp-minify-css");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");
const imagemin = require("gulp-imagemin");

// Gulp Path File
var PUG_FILE = "./src/_.pug";
var SCSS_FILE = "./src/assets/sass/\*\*/_.scss";
var CSS_FILE = "./src/assets/css/**/\*.css";
var JS_FILE = "./src/assets/js/**/_.js";
var IMG_FILE = "./src/assets/img/\*\*/_";

// Sass Function
function sass() {
return src([SCSS_FILE])
.pipe(gulpSass())
.pipe(postcss([autoprefixer()]))
.pipe(minifyScss())
.pipe(dest("./dist/assets/css"));
}

// Minify css Function
function minifycss() {
return src([CSS_FILE])
.pipe(minifyScss())
.pipe(dest("./dist/assets/css"));
}

// JS Function
function javascript() {
return (
src([JS_FILE])
.pipe(uglify())
// .pipe(concat("based.js"))
.pipe(dest("./dist/assets/js"))
);
}

// Image Function
function image() {
return src([IMG_FILE])
.pipe(imagemin())
.pipe(dest("./dist/assets/img"));
}

// Pug Function
function html() {
return src([PUG_FILE])
.pipe(pug())
.pipe(dest("./dist"));
}

// Browser Sync Function
function browser() {
browserSync.init(["./dist/**/*.*"], {
server: {
baseDir: "./dist"
}
});
watchTasks();
}

function watchTasks() {
watch(PUG_FILE, series(html));
watch(IMG_FILE, series(image));
watch(CSS_FILE, series(minifycss));
watch(SCSS_FILE, series(sass));
watch(JS_FILE, series(javascript));
}

exports.sass = sass;
exports.html = html;
exports.image = image;
exports.minifycss = minifycss;
exports.javascript = javascript;
exports.start = series(browser);

// Export All Function
exports.default = series(sass, html, image, minifycss, javascript);
