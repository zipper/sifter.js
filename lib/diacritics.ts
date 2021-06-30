
type TDiacraticList = {[key:string]:string};

// https://github.com/andrewrk/node-diacritics/blob/master/index.js
var DIACRITICS:TDiacraticList = {
	" ":" ",
	0:"߀",
	A:"ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ",
	AA:"Ꜳ",
	AE:"ÆǼǢ",
	AO:"Ꜵ",
	AU:"Ꜷ",
	AV:"ꜸꜺ",
	AY:"Ꜽ",
	B:"ⒷＢḂḄḆɃƁ",
	C:"ⒸＣꜾḈĆCĈĊČÇƇȻ",
	D:"ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ",
	Dh:"Ð",
	DZ:"ǱǄ",
	Dz:"ǲǅ",
	E:"ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ",
	F:"ꝼⒻＦḞƑꝻ",
	G:"ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ",
	H:"ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ",
	I:"ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ",
	J:"ⒿＪĴɈȷ",
	K:"ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ",
	L:"ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ",
	LJ:"Ǉ",
	Lj:"ǈ",
	M:"ⓂＭḾṀṂⱮƜϻ",
	N:"ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ",
	NJ:"Ǌ",
	Nj:"ǋ",
	O:"ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ",
	OE:"Œ",
	OI:"Ƣ",
	OO:"Ꝏ",
	OU:"Ȣ",
	P:"ⓅＰṔṖƤⱣꝐꝒꝔ",
	Q:"ⓆＱꝖꝘɊ",
	R:"ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ",
	S:"ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ",
	T:"ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ",
	Th:"Þ",
	TZ:"Ꜩ",
	U:"ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ",
	V:"ⓋＶṼṾƲꝞɅ",
	VY:"Ꝡ",
	W:"ⓌＷẀẂŴẆẄẈⱲ",
	X:"ⓍＸẊẌ",
	Y:"ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ",
	Z:"ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ",
	a:"ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ",
	aa:"ꜳ",
	ae:"æǽǣ",
	ao:"ꜵ",
	au:"ꜷ",
	av:"ꜹꜻ",
	ay:"ꜽ",
	b:"ⓑｂḃḅḇƀƃɓƂ",
	c:"ｃⓒćĉċčçḉƈȼꜿↄ",
	d:"ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ",
	dh:"ð",
	dz:"ǳǆ",
	e:"ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ",
	f:"ⓕｆḟƒ",
	ff:"ﬀ",
	fi:"ﬁ",
	fl:"ﬂ",
	ffi:"ﬃ",
	ffl:"ﬄ",
	g:"ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ",
	h:"ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ",
	hv:"ƕ",
	i:"ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı",
	j:"ⓙｊĵǰɉ",
	k:"ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ",
	l:"ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ",
	lj:"ǉ",
	m:"ⓜｍḿṁṃɱɯ",
	n:"ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ",
	nj:"ǌ",
	o:"ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ",
	oe:"œ",
	oi:"ƣ",
	oo:"ꝏ",
	ou:"ȣ",
	p:"ⓟｐṕṗƥᵽꝑꝓꝕρ",
	q:"ⓠｑɋꝗꝙ",
	r:"ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ",
	s:"ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ",
	ss:"ß",
	t:"ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ",
	th:"þ",
	tz:"ꜩ",
	u:"ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ",
	v:"ⓥｖṽṿʋꝟʌ",
	vy:"ꝡ",
	w:"ⓦｗẁẃŵẇẅẘẉⱳ",
	x:"ⓧｘẋẍ",
	y:"ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ",
	z:"ⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}

/**
 * code points generated from toCodePoints();
 * removed 65339 to 65345
 */
var code_points = [
	[ 67, 67 ],
	[ 160, 160 ],
	[ 192, 438 ],
	[ 452, 652 ],
	[ 961, 961 ],
	[ 1019, 1019 ],
	[ 1083, 1083 ],
	[ 1281, 1289 ],
	[ 1984, 1984 ],
	[ 5095, 5095 ],
	[ 7429, 7441 ],
	[ 7545, 7549 ],
	[ 7680, 7935 ],
	[ 8580, 8580 ],
	[ 9398, 9449 ],
	[ 11360, 11391 ],
	[ 42792, 42793 ],
	[ 42802, 42851 ],
	[ 42873, 42897 ],
	[ 42912, 42922 ],
	[ 64256, 64260 ],
	[ 65313, 65338 ],
	[ 65345, 65370 ]
];

/**
 * Remove accents
 * via https://github.com/krisk/Fuse/issues/133#issuecomment-318692703
 *
 */
export function asciifold(str:string):string{
	return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '').normalize('NFKD').toLowerCase();
};


/**
 * Convert list of diacritics to array of code points
 *
 */
// @ts-ignore
function toCodePoints(tolerance=8){
	var char_codes:number[] = [];

	for( let letter in DIACRITICS ){
		let _diacritics = DIACRITICS[letter];
		for( let n = 0; n < _diacritics.length; n++ ){
			var code_point = _diacritics.codePointAt(n);
			if( code_point ) char_codes.push( code_point );
		}
	}

	//https://stackoverflow.com/questions/40431572/is-there-a-simple-way-to-group-js-array-values-by-range
	char_codes.sort((a, b) => a - b);
	var accumulator: number[][] = [];
    var result = char_codes.reduce(function (accumulator, currentValue, index, source) {

		if( !index ){
			accumulator.push( [currentValue,currentValue] );

		}else if( currentValue - source[index - 1] > tolerance ){
			accumulator.push( [currentValue,currentValue] );

		}else{

			let range = accumulator.pop();
			if( range ){
				accumulator.push( [range[0],currentValue]);
			}
		}

        return accumulator;
    }, accumulator);

	console.log(`char_codes (${result.length})`,result);
}

/**
 * Generate a list of diacritics from the list of code points
 *
 */
export function generateDiacritics():TDiacraticList{

	var latin_convert:{[key:string]:string} = {
		'l·': 'l',
		'ʼn': 'n',
		'æ': 'ae',
		'ø': 'o',
		'aʾ': 'a',
		'dž': 'dz',
	};

	var diacritics:{[key:string]:string} = {};
	//var no_latin	= [];
	code_points.forEach((code_range)=>{

		for(let i = code_range[0]; i <= code_range[1]; i++){
			let diacritic	= String.fromCharCode(i);
			let latin		= diacritic.normalize('NFD').replace(/[\u0300-\u036F]/g, '').normalize('NFKD');

			if( latin == diacritic ){
				//no_latin.push(diacritic);
				continue;
			}

			latin = latin.toLowerCase();

			if( latin in latin_convert ){
				latin = latin_convert[latin];
			}

			if( !(latin in diacritics) ){
				diacritics[latin] = latin + latin.toUpperCase();
			}
			diacritics[latin] += diacritic;
		}
	});

	//console.log('no_latin',JSON.stringify(no_latin));

	return diacritics;
}

/**
 * Expand a regular expression pattern to include diacritics
 * 	eg /a/ becomes /aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑAⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ/
 *
 */
var diacritics:null|TDiacraticList = null
export function diacriticRegexPoints(regex:string):string{

	if( diacritics === null ){
		diacritics = generateDiacritics();
	}

	for( let latin in diacritics ){
		if( diacritics.hasOwnProperty(latin) ){
			regex = regex.replace( new RegExp(latin,'g'), '['+diacritics[latin]+']');
		}
	}
	return regex;
}


/**
 * Expand a regular expression pattern to include diacritics
 * 	eg /a/ becomes /aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑAⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ/
 *
 * rollup will bundle this function (and the DIACRITICS constant) unless commented out
 *
var diacriticRegex = (function() {

	var list = [];
	for( let letter in DIACRITICS ){

		if( letter.toLowerCase() != letter && letter.toLowerCase() in DIACRITICS ){
			continue;
		}

		if( DIACRITICS.hasOwnProperty(letter) ){

			var replace = letter + DIACRITICS[letter];
			if( letter.toUpperCase() in DIACRITICS ){
				replace += letter.toUpperCase() + DIACRITICS[letter.toUpperCase()];
			}

			list.push({let:letter,pat:'['+replace+']'});
		}
	}

	return function(regex:string):string{
		list.forEach((item)=>{
			regex = regex.replace( new RegExp(item.let,'g'),item.pat);
		});
		return regex;
	}
})();
*/
