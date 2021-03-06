;(function() {

var console = {}
  , files = __TESTS__;

console.log = function(text) {
  var args = Array.prototype.slice.call(arguments, 1)
    , i = 0;

  text = text.replace(/%\w/g, function() {
    return args[i++] || '';
  });

  if (window.console) window.console.log(text);
  document.body.innerHTML += '<pre>' + escape(text) + '</pre>';
};

Object.keys = Object.keys || function(obj) {
  var out = []
    , key;

  for (key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      out.push(key);
    }
  }

  return out;
};

String.prototype.trim = String.prototype.trim || function() {
  return this.replace(/^\s+|\s+$/g, '');
};

function load() {}

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

(__MAIN__)();

}).call(this);
