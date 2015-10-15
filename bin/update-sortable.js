#! /usr/bin/env node
var path = require("path");
var fs = require("fs-extra");
var p = path.resolve(__dirname, "../jspm_packages/github/oribella");

fs.readdirSync(p).map(function(file) {
  return path.join(p, file);
}).filter(function(file) {
  return fs.statSync(file).isDirectory() &&
    file.split(".").length === 3 &&
    file.split("/").pop().indexOf("aurelia-sortable") !== -1;
}).forEach(function( folder ) {
  fs.copySync(path.resolve(__dirname, "../../aurelia-sortable/dist/amd"), folder, { clobber: true });
});
