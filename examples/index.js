/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-new-wrappers */

'use strict';

var Number = require( '@stdlib/number-ctor' );
var isNonPositiveNumberArray = require( './../lib' );

var bool = isNonPositiveNumberArray( [ -5.0, -0.2, -3.9 ] );
console.log( bool );
// => true

bool = isNonPositiveNumberArray( [ -1, -2, -3 ] );
console.log( bool );
// => true

bool = isNonPositiveNumberArray( [ -1, new Number( -6 ), -3 ] );
console.log( bool );
// => true

bool = isNonPositiveNumberArray( [ -1, 'abc', -3 ] );
console.log( bool );
// => false

bool = isNonPositiveNumberArray( -78.0 );
console.log( bool );
// => false

bool = isNonPositiveNumberArray( [] );
console.log( bool );
// => false
