// 引入gulp
// 模块：函数|对象  其他js文件
var gulp=require('gulp'); //实例
var sass=require('gulp-sass');

// 编译sass文件

// 一、创建一个gulp任务：编译sass
// 1、api 创建
gulp.task('compileSass',function(){
    // 2、查找sass文件
    gulp.src('./src/sass/*.scss').pipe(sass({outputstyle:'expanded'}).on('error', sass.logError))   //文件流 scss-->编译后的文件流css 
    // 3、输出文件到硬盘
    .pipe(gulp.dest('./src/css/'))
        
})
// 二、创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
    // 当文件有修改，则执行complieSass任务
    gulp.watch('./src/sass/*.scss',['compileSass'])
})

// 合并压缩js文件（concat合并 uglify压缩 rename重命名）
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
gulp.task('comblineJs',function(){
    // 查找js文件
    gulp.src(['./src/js/*.js','!./src/js/{all,jquery-3.2.1,all.min}.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./src/js/'))
    // 压缩
    .pipe(uglify())
    // 命名压缩文件
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./src/js/'))

})
