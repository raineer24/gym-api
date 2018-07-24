const gulp = require('gulp');
const args = require('yargs').argv;
const config = require('./gulp.config')();
require('dotenv').config();

const $ = require('gulp-load-plugins')({ lazy: true });
const log = require('color-logs')(true, true, 'Item');

function serve(isDev) {
    log.info(`Running in ${isDev ? 'development' : 'production'} mode...`);
    if (isDev) {
        $.nodemon({
            script: 'app.js',
            tasks: ['lint', 'db-create'],
        });
    } else {
        $.nodemon({
            script: 'app.js',
        });
    }
}

gulp.task('db-create', $.shell.task([
    'mysql -u root -h localhost -e "DROP DATABASE IF EXISTS gymapi;CREATE DATABASE gymapi;"',
    'mysql -u root -h localhost gymapi < db/local.sql',
]));

gulp.task('develop', ['db-create'], () => { serve(true); });