Showdown's Twitter Extension
==========================

[![Build Status](https://travis-ci.org/showdownjs/twitter-extension.svg)](https://travis-ci.org/showdownjs/twitter-extension) [![npm version](https://badge.fury.io/js/showdown-twitter.svg)](http://badge.fury.io/js/showdown-twitter) [![npm version](https://badge.fury.io/bo/showdown-twitter.svg)](http://badge.fury.io/bo/showdown-twitter) 

------

**Twitter extension for [showdown](https://github.com/showdownjs/showdown)**

Adds support for:

    @username   ->  <a href="http://twitter.com/username">@username</a>
    #hashtag    ->  <a href="http://twitter.com/search/%23hashtag">#hashtag</a>


## Installation

### With [npm](http://npmjs.org)

    npm install showdown-twitter

### With [bower](http://bower.io/)

    bower install showdown-twitter

### Manual

You can also [download the latest release zip or tarball](https://github.com/showdownjs/twitter-extension/releases) and include it in your webpage, after showdown:

    <script src="showdown.min.js">
    <script src="showdown-twitter.min.js">

### Enabling the extension

After including the extension in your application, you just need to enable it in showdown.

    var converter = new showdown.Converter({extensions: ['twitter']});

## Example

```javascript
var converter = new showdown.Converter({extensions: ['twitter']}),
    input = 'This is a tweet from @showdownjs with the hashtag #showdownRules',
    html = converter.makeHtml(input);
    console.log(html);
```

This should output:

```html
<p>This is a tweet from <a href="http://twitter.com/showdownjs">@showdownjs</a> with the hashtag <a href="http://twitter.com/search/%23showdownRules">#showdownRules</a></p>
```

## License
These files are distributed under BSD license. For more information, please check the [LICENSE file](https://github.com/showdownjs/twitter-extension/blob/master/LICENSE) in the source code.
