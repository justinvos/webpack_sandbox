var gulp = require("gulp")
var sass = require("gulp-sass")

gulp.task("sass", [], function() {
  gulp.src('client/styles/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public'));
})
