'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var process = require('suman-browser-polyfills/modules/process');
var global = require('suman-browser-polyfills/modules/global');
var fs = require("fs");
var path = require("path");
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var replaceStream = require('replacestream');
var _suman = global.__suman = (global.__suman || {});
var webpackTemplatePath = path.resolve(__dirname + '/lib/html-templates/webpack.html');
var getBeforeWebpack = function () {
};
var getAfterWebpack = function () {
};
exports.get = function (projectRoot, sumanConf, sumanOpts) {
    return function run() {
        return fs.createReadStream(webpackTemplatePath)
            .pipe(age);
    };
};
