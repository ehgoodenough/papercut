console.log("[\u001b[90m##:##:##\u001b[39m]",
    "Installing dependencies from ``package.json``")
require("child_process").execSync("npm install")

var gulp = require("gulp")
var gulp_if = require("gulp-if")
var gulp_util = require("gulp-util")
var gulp_sass = require("gulp-sass")
var gulp_uglify = require("gulp-uglify")
var gulp_connect = require("gulp-connect")
var gulp_minify_css = require("gulp-minify-css")
var gulp_minify_html = require("gulp-minify-html")
var gulp_prefixify_css = require("gulp-autoprefixer")
var gulp_transform_json = require("gulp-json-transform")
var gulp_nwify = require("gulp-nw-builder")
var gulp_debug = require("gulp-debug")

var fs = require("fs")
var opn = require("opn")
var chalk = require("chalk")
var yargs = require("yargs")
var beepbeep = require("beepbeep")
var indent_string = require("indent-string")

var vinyl_buffer = require("vinyl-buffer")
var vinyl_source = require("vinyl-source-stream")
var merge_stream = require("merge-stream")

var browserify = require("browserify")
var watchify = require("watchify")
var babelify = require("babelify")
var urify = require("urify")

var HOST = "localhost"
var PORT = 2794

if(yargs.argv._.indexOf("server") != -1) {
    browserify = watchify(browserify({
        debug: true, cache: {}, packageCache: {}
    }))
} else {
    browserify = browserify()
}
browserify.add("./source/index.js")
browserify.transform(babelify)
browserify.transform(urify)

function build() {
    gulp_util.log("Building from ``source`` for",
        ["web", "win64", "osx64"].join(", "))
    return merge_stream(
        gulp.src("./source/index.html")
            .pipe(gulp_if(yargs.argv.minify, gulp_minify_html()))
            .pipe(gulp.dest("./build/web")),
        gulp.src("./source/index.css")
            .pipe(gulp_sass())
            .pipe(gulp_prefixify_css())
            .pipe(gulp_if(yargs.argv.minify, gulp_minify_css()))
            .pipe(gulp.dest("./build/web"))
            .pipe(gulp_connect.reload()),
        browserify.bundle()
            .pipe(vinyl_source("index.js")).pipe(vinyl_buffer())
            .pipe(gulp_if(yargs.argv.minify, gulp_uglify()))
            .pipe(gulp.dest("./build/web"))
            .pipe(gulp_connect.reload()),
        gulp.src("./package.json")
            .pipe(gulp_transform_json(function(package) {
                return {
                    "name": package.name,
                    "version": package.version,
                    "description": package.description,
                    "window": package.window,
                    "main": package.main
                }
            }))
            .pipe(gulp.dest("./build/web"))
    ).pipe(gulp_nwify({
        version: "v0.12.3",
        platforms: ["win64", "osx64"],
        cacheDir: "./node_webkit_cache",
        buildDir: "./build",
        buildType: function() {return ""},
        quiet: true,
    }))
}

build()

if(yargs.argv._.indexOf("server") != -1) {
    fs.watch("./source", build)
    gulp_connect.server({
        livereload: true,
        root: "./build/web",
        host: HOST, port: PORT
    })
    opn("http://" + HOST + ":" + PORT)
}

process.on("uncaughtException", function(error) {
    console.log(chalk.red(indent_string(error + "\n", "    ")))
    gulp_util.beep()
})
