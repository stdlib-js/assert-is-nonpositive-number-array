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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array-float32' );
var Number = require( '@stdlib/number-ctor' );
var isNonPositiveNumberArray = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNonPositiveNumberArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tests for an array-like object containing only nonpositive numbers', function test( t ) {
	var arr;

	arr = [ -5.0, new Number( -5 ), 0 ];
	t.equal( isNonPositiveNumberArray( arr ), true, 'returns true' );

	arr = [ -5.0, '-3', null ];
	t.equal( isNonPositiveNumberArray( arr ), false, 'returns false' );

	arr = {
		'length': 2,
		'0': -3.14,
		'1': 0.0
	};
	t.equal( isNonPositiveNumberArray( arr ), true, 'returns true' );

	arr = new Float32Array( [-5.0, -1.5] );
	t.equal( isNonPositiveNumberArray( arr ), true, 'returns true' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object having only nonpositive number primitives', function test( t ) {
	var arr;

	arr = [ -5.0, 0.0 ];
	t.equal( isNonPositiveNumberArray.primitives( arr ), true, 'returns true' );

	arr = [ new Number( -5 ), -1.0, -1.0 ];
	t.equal( isNonPositiveNumberArray.primitives( arr ), false, 'returns false' );

	arr = {
		'length': 2,
		'0': -3.14,
		'1': 0.0
	};
	t.equal( isNonPositiveNumberArray.primitives( arr ), true, 'returns true' );

	arr = new Float32Array( [-5.0, -1.5] );
	t.equal( isNonPositiveNumberArray.primitives( arr ), true, 'returns true' );

	t.end();
});

tape( 'the function provides a method to test for an array-like object having only nonpositive number objects', function test( t ) {
	var arr;

	arr = [ new Number( -5 ), new Number( -5 ) ];
	t.equal( isNonPositiveNumberArray.objects( arr ), true, 'returns true' );

	arr = [ -5.0, 0.0 ];
	t.equal( isNonPositiveNumberArray.objects( arr ), false, 'returns false' );

	arr = {
		'length': 2,
		'0': new Number( -3.14 ),
		'1': new Number( 0.0 )
	};
	t.equal( isNonPositiveNumberArray.objects( arr ), true, 'returns true' );

	arr = new Float32Array( [-5.0, -1.5] );
	t.equal( isNonPositiveNumberArray.objects( arr ), false, 'returns false' );

	t.end();
});
