<a name="1.1.0"></a>
# [1.1.0](https://github.com/showdownjs/twitter-extension/compare/1.0.1...v1.1.0) (2016-11-26)


### Features

* **uml:** update loading mechanism to UML ([f1065e4](https://github.com/showdownjs/twitter-extension/commit/f1065e4))



<a name"1.0.1"></a>
### 1.0.1 (2015-06-06)


#### Bug Fixes

* fix showdown name in the global scope ([3a0030a9](https://github.com/showdownjs/twitter-extension/commit/3a0030a9), closes [#3](https://github.com/showdownjs/twitter-extension/issues/3))


<a name"1.0.0"></a>
## 1.0.0 (2015-06-04)


#### Release information

This release updates the extension in order to make it compatible with showdown v.1.0.x.
However, this version is not compatible with older versions of showdown.
Since twitter extension was previously bundled with showdown, with versions prior to v 1.0.x, use the bundled version instead.

#### Compatibility

**Compatible with showdown v.1.0.x**

#### Features

* **bower.json**: add dependencies to bower json
* **package.json**: add dependencies to package.json

#### Breaking changes

* **renamed files**: src file renamed to `showdown-twitter.js`.
  To update, if your using src files directly, change your dependencies from `twitter.js` to `showdown-twitter.js`
