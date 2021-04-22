var assert = require('assert');
var utils = require('../build/cjs/utils.js');

describe('#prepareSearch()', function() {

	it('should remove accents', function() {

		var from	= 'aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ';
		var to		= 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

		assert.equal( utils.cmp(from,to), true);
	});


});
