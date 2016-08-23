var gulp = require ('gulp')
var connect = require ('gulp-connect')
var traceur = require ('gulp-traceur')
var sass = require ('gulp-ruby-sass')

gulp.task('connect', function (){
  connect.server({
    livereload:true,
    port: 8805
  });
});

gulp.task('reload', function(){
  gulp.src('./dist/**/*.*')
  .pipe(connect.reload());
});

gulp.task('sass', function() {
  return sass ('./sass/*.scss')
      .pipe(gulp.dest('dist/css'));
});

gulp.task('traceur' , function() {
  gulp.src('./scripts/*.js')
      .pipe(traceur())
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function(){  //execute stuff automatically!
  gulp.watch(['./sass/*.scss'], ['sass']);
  gulp.watch(['./scripts/*.js'], ['traceur']);
  gulp.watch(['./dist/**/*.*'], ['reload']);
})

gulp.task('default', ['connect', 'watch', 'sass', 'traceur', 'reload']);
