const {src, dest} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')

function sassCompiler(done){
    src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(autoprefixer())
        .pipe(dest('./dist/css'))
    done()
}

exports.sassCompiler = sassCompiler