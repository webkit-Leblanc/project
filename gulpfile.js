var gulp=require('gulp');
var sass=require('gulp-sass');
gulp.task('translateSass',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))       
})
/*监听文件修改*/
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['translateSass'])
})
var browserSync=require('browser-sync');
gulp.task('server',function(){
    browserSync({
        // server:'./src/',
        // 指定端口
        port:10086,
        // 代理服务器 browserSync代理php服务器(识别php 自动刷新)
        proxy:'http://localhost:1000',
        // 监听文件修改
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });
    // 监听sass修改
    gulp.watch('./src/sass/*.scss',['translateSass'])
})

// 合并压缩js文件
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('mergeJs',function(){
    // 查找js文件
    gulp.src(['./src/js/*.js','!./src/js/{jquery-3.2.1,all,all.min,require}.js'])

    // 合并js
    .pipe(concat('all.js'))

    // 输出到硬盘
    .pipe(gulp.dest('./src/js/'))

    // 压缩
    .pipe(uglify())

    // 重命名
    .pipe(rename({suffix:'.min'}))

    // 输出到硬盘
    .pipe(gulp.dest('./src/js/'))
});