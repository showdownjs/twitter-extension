/*! showdown-twitter 06-06-2015 */

(function () {
  'use strict';

  var twitter = function () {
    return [
      {
        type:    'lang',
        regex:   '\\B(\\\\)?@([\\S]+)\\b',
        replace: function (match, leadingSlash, username) {
          if (leadingSlash === '\\') {
            return match;
          } else {
            return '<a href="http://twitter.com/' + username + '">@' + username + '</a>';
          }
        }
      },
      {
        type:    'lang',
        regex:   '\\B(\\\\)?#([\\S]+)\\b',
        replace: function (match, leadingSlash, tag) {
          if (leadingSlash === '\\') {
            return match;
          } else {
            return '<a href="http://twitter.com/search/%23' + tag + '">#' + tag + '</a>';
          }
        }
      },
      {
        type:    'lang',
        regex:   '\\\\@',
        replace: '@'
      }
    ];
  };
  if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
    window.showdown.extensions.twitter = twitter;
  }
  if (typeof module !== 'undefined') {
    module.exports = twitter;
  }

}());

//# sourceMappingURL=showdown-twitter.js.map