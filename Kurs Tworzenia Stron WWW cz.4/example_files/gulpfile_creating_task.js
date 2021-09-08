const gulp = require('gulp'); //code which imports gulp

// deprecated method for creating task in gulp
// gulp.task('test', function(done){
//     console.log('test')
//     done()
// })

// current method for creating taks in gulp
function test2(done){
    console.log('test2')
    done()
}

exports.test2 = test2 
// name after "exports." doesn't have to be the same as function name, but "test2" after "=" must be the same as function name
// a good practic is givin' name after "exports." the way that which means the task name