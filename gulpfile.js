var gulp = require("gulp")
var sass = require("gulp-sass")
var ts = require('gulp-typescript')

gulp.task("sass", [], function() {
  gulp.src("client/styles/main.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public"))
})

gulp.task("ts", [], function() {
  gulp.src("server/**/*.ts")
    .pipe(ts({
            moduleResolution: "node",
            noImplicitAny: true,
            outFile: 'server.js'
        }))
    .pipe(gulp.dest("dist"))
})
