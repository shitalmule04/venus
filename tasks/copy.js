'use strict';

const gulp  = require('gulp'),
      del   = require('del'),
      paths = require('./paths'),
      SRC   = [
          './src/assets/venus.min.css',
          './src/assets/venus-docs.min.css',
          './src/assets/fonts/*',
          './server/**/*',
          './package.json',
      ],
      DIST  = [
          './src/assets/venus.min.css',
          './src/assets/fonts/*',
      ];


/**
 * Copy main files to 'dist' and 'docs' folders
 */
gulp.task('copy', ['usemin', 'clean:dist'], () => {
    gulp.src(DIST, { base: './src/' })
        .pipe(gulp.dest(paths.dist));

    return gulp.src(SRC, { base: './src/' })
        .pipe(gulp.dest(paths.docs));
});

