'use strict';

//dts
import {IGlobalSumanObj, ISumanConfig, ISumanOpts} from "suman-types/dts/global";

//polyfills
const process = require('suman-browser-polyfills/modules/process');
const global = require('suman-browser-polyfills/modules/global');

//core
import fs = require('fs');
import path = require('path');

//npm
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const replaceStream = require('replacestream');

//project
const _suman: IGlobalSumanObj = global.__suman = (global.__suman || {});
const webpackTemplatePath = path.resolve(__dirname + '/lib/html-templates/webpack.html');

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack Test</title>
</head>
<body>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
  <suman-test-content></suman-test-content>
  <script type="text/javascript" src="dist/suman.js"></script>
  <script type="text/javascript" src="dist/browser-tests.js"></script>

  </body>
  </html>

*/

const getBeforeWebpack = function () {

};

const getAfterWebpack = function () {

};

export const get = function (projectRoot: string, sumanConf: ISumanConfig, sumanOpts: ISumanOpts) {

  return function run(){

    return fs.createReadStream(webpackTemplatePath)
    .pipe(age);

  }


};