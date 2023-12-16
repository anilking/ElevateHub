const config = {
  svg: {
    src: ['src/assets/themes/base/images/icons/*.svg'],
  },
};

const gulp = require('gulp'),
  path = require('path'),
  svgmin = require('gulp-svgmin'),
  rename = require('gulp-rename'),
  inject = require('gulp-inject'),
  svgstore = require('gulp-svgstore');

gulp.task('svg', () => {
  let svgs = gulp
    .src(config.svg.src)
    .pipe(
      svgmin(function (file) {
        let prefix = path.basename(file.relative, path.extname(file.relative)),
          config;

        config = {
          plugins: [
            {
              removeTitle: true,
            },
            {
              removeStyleElement: true,
            },
            {
              cleanupIDs: {
                prefix: prefix + '-',
                minify: true,
              },
            },
          ],
        };

        if (prefix.indexOf('as-is') < 0) {
          config.plugins.push({
            removeAttrs: {
              attrs: '(fill|stroke)',
            },
          });
        }

        return config;
      }),
    )
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src('./src/index.html')
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest('src'));
});
