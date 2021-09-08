const {series, parallel} = require('gulp')

function sass(done){
    console.log('SASS compiling')
    done()
}

function html(done){
    console.log('Minify HTML')
    done()
}

function liveServer(done){
    console.log('Run Live Server')
    done()
}

const mainFunctions = parallel(sass, html)
exports.default = series(mainFunctions, liveServer)