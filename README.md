<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isNonPositiveNumberArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an array-like object containing only nonpositive numbers.



<section class="usage">

## Usage

To use in Observable,

```javascript
isNonPositiveNumberArray = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonpositive-number-array@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isNonPositiveNumberArray = require( 'path/to/vendor/umd/assert-is-nonpositive-number-array/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonpositive-number-array@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isNonPositiveNumberArray;
})();
</script>
```

#### isNonPositiveNumberArray( value )

Tests if a `value` is an array-like object containing **only** nonpositive numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isNonPositiveNumberArray( [ -3.0, new Number(-3.0) ] );
// returns true

bool = isNonPositiveNumberArray( [ -3.0, '-3.0' ] );
// returns false
```

#### isNonPositiveNumberArray.primitives( value )

Tests if a `value` is an array-like object `array` containing **only** primitive nonpositive numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isNonPositiveNumberArray.primitives( [ -1.0, 0.0, -10.0 ] );
// returns true

bool = isNonPositiveNumberArray.primitives( [ -3.0, new Number(-1.0) ] );
// returns false
```

#### isNonPositiveNumberArray.objects( value )

Tests if a `value` is an array-like object `array` containing **only** object nonpositive numbers.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isNonPositiveNumberArray.objects( [ new Number(-1.0), new Number(-1.0) ] );
// returns true

bool = isNonPositiveNumberArray.objects( [ -1.0, 0.0, -10.0 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonpositive-number-array@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isNonPositiveNumberArray( [ -5.0, -0.2, -3.9 ] );
// returns true

bool = isNonPositiveNumberArray( [ -1, -2, -3 ] );
// returns true

bool = isNonPositiveNumberArray( [ -1, new Number( -6 ), -3 ] );
// returns true

bool = isNonPositiveNumberArray( [ -1, 'abc', -3 ] );
// returns false

bool = isNonPositiveNumberArray( -78.0 );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-nonpositive-number-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-nonpositive-number-array

[test-image]: https://github.com/stdlib-js/assert-is-nonpositive-number-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-nonpositive-number-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-nonpositive-number-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-nonpositive-number-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-nonpositive-number-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-nonpositive-number-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-nonpositive-number-array/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-nonpositive-number-array/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-nonpositive-number-array/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-nonpositive-number-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-nonpositive-number-array/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert-is-array/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
