var runTests = require('./framework.js').runTests;

var tests = [
  ['#a', "this text is included"],
  ["#b", "this text overwrote what was just there."]
];

// First test need to wait a while for the web server to start
setTimeout(function(){
  runTests("basic.html", tests);
}, 1000);
