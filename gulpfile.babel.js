////////////////////////////////////////
// benkutil.com task runner           //
// Created on Jan 14 2016 10:36 AM    //
// by Ben Kutil <ben@make-things.com> //
////////////////////////////////////////





//
// TOC
//
// Imports, Plugins
//





// § Imports, Plugins
import gulp from 'gulp';
import cp from 'child_process';
import critical from 'critical';
import del from 'del';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';


// §§ Configs
import config from './package.json';





// § Constants
//const testLintOptions = {
//  env: {
//    mocha: true
//  }
//};

// §§ Auto Load Plugins
const $ = gulpLoadPlugins();
$.browserSync = browserSync;
$.cp = cp;
$.critical = critical;
$.del = del;
$.reload = browserSync.reload;


// §§ Auto Load Subtasks
// Pulls task directory from package.json, under 'build' section
// Passes $, which includes the loaded plugins.
$.loadSubtasks( `${config.build.tasks}/*.js`, $, config );
