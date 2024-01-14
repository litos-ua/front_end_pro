
const { parallel, series, src, dest, watch } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const scss = gulpSass(sass);
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const ssi = require("gulp-ssi");
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

const APP_PATH = "./app/";
const BID_PATH = "./dist/";
const SCRIPT_PATH = `${APP_PATH}scripts/`;
const STYLES_PATH = `${APP_PATH}styles/`;
const PARTS_PATH = `${APP_PATH}parts/`;
const IMAGES_PATH = `${APP_PATH}images/`

function cleanDist() {
//    return src(`${BID_PATH}**/*`, { force: true }).pipe(clean());
    return src([`${BID_PATH}**/*`, `!${BID_PATH}img/**`], { force: true, allowEmpty: true })
        .pipe(clean())
}

function html() {
    return src(`${APP_PATH}*.html`)
        .pipe(ssi())
        .pipe(dest(`${BID_PATH}`))
        .pipe(browserSync.stream());
}
function styles() {
    return src(`${STYLES_PATH}*.scss`)
        .pipe(scss({ outputStyle: "compressed" }))
        .pipe(rename({ extname: ".min.css" }))
        .pipe(dest(`${BID_PATH}css`))
        .pipe(browserSync.stream());
}

function scripts() {
    return src([`${SCRIPT_PATH}utils/*.js`, `${SCRIPT_PATH}*.js`])
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
            }),
        )
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(dest(`${BID_PATH}js`))
        .pipe(browserSync.stream());
}

function images() {
    return src(`${IMAGES_PATH}src/*.{jpg,png,gif}`)
        .pipe(newer(`${BID_PATH}img`))
        .pipe(imagemin({
            quality: 70,
            progressive: true
        }))
        .pipe(dest(`${BID_PATH}img`))
        .pipe(browserSync.stream());
}

function serverStart(){
    browserSync.init({
        watch: true,
        server: {
            baseDir: BID_PATH,
        },
        port: 3000,
    });
}


function reloadBrowser(cb) {
    browserSync.reload();
    cb();
}

function watcher() {
    serverStart();
    watch(`${SCRIPT_PATH}*.js`, scripts);
    watch(`${STYLES_PATH}*.scss`, styles);
    watch(`${IMAGES_PATH}src/*.{jpg,png,gif}`, images);
    watch(`${PARTS_PATH}*.html`, html);

//    watch(`${APP_PATH}*.html`, html);
//    watch(`${APP_PATH}**/*`).on("change", browserSync.reload);
//    watch(`${PARTS_PATH}*.html`,html).on('change', browserSync.reload);

    //watch(`${APP_PATH}*.html`,html).on('change', reloadBrowser);
    watch(`${APP_PATH}*.html`,parallel(html, reloadBrowser));
}


exports.build = series(cleanDist, html, styles, scripts);
exports.default = series(html, styles, scripts, images, watcher);
exports.clean = series(cleanDist);
exports.images = series(images);