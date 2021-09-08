const gulp = require('gulp');

function text1(done){
    console.log(1234)
    done()
}

function text2(done){
    console.log('abcd')
    done()
}

exports.showTextS = gulp.series(text1, text2) // series wykonuje wszystkie taski/funkcje po kolei - rozpoczyna kolejny task dopiero po zakończeniu poprzedniego
exports.showTextP = gulp.parallel(text1, text2) // parallel wykonuje wszystkie taski/funkcje jednocześnie

exports.default = text1