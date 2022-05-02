// @todo 自动刷新代码
// https://www.tslang.cn/docs/handbook/gulp.html
// https://www.typescriptlang.org/docs/handbook/gulp.html
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("copy-json", function () {
    return gulp.src("src/**/*.json")
        .pipe(gulp.dest("out"));
});

gulp.task("copy-html", function () {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("out"));
});

// @fix Task function must be specified
// https://blog.csdn.net/qq_43775821/article/details/109706122
gulp.task("default", gulp.series("copy-json", "copy-html", function () {
    return tsProject.src()
    .pipe(tsProject())
    .js
    // .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("out"));
}));
