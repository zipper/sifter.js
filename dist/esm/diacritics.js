/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */
// https://github.com/andrewrk/node-diacritics/blob/master/index.js
/**
 * code points generated from toCodePoints();
 * removed 65339 to 65345
 */

var code_points = [[67, 67], [160, 160], [192, 438], [452, 652], [961, 961], [1019, 1019], [1083, 1083], [1281, 1289], [1984, 1984], [5095, 5095], [7429, 7441], [7545, 7549], [7680, 7935], [8580, 8580], [9398, 9449], [11360, 11391], [42792, 42793], [42802, 42851], [42873, 42897], [42912, 42922], [64256, 64260], [65313, 65338], [65345, 65370]];
/**
 * Remove accents
 * via https://github.com/krisk/Fuse/issues/133#issuecomment-318692703
 *
 */

function asciifold(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036F]/g, '').normalize('NFKD').toLowerCase();
}
/**
 * Generate a list of diacritics from the list of code points
 *
 */


function generateDiacritics() {
  var latin_convert = {
    'l·': 'l',
    'ʼn': 'n',
    'æ': 'ae',
    'ø': 'o',
    'aʾ': 'a',
    'dž': 'dz'
  };
  var diacritics = {}; //var no_latin	= [];

  code_points.forEach(code_range => {
    for (let i = code_range[0]; i <= code_range[1]; i++) {
      let diacritic = String.fromCharCode(i);
      let latin = diacritic.normalize('NFD').replace(/[\u0300-\u036F]/g, '').normalize('NFKD');

      if (latin == diacritic) {
        //no_latin.push(diacritic);
        continue;
      }

      latin = latin.toLowerCase();

      if (latin in latin_convert) {
        latin = latin_convert[latin];
      }

      if (!(latin in diacritics)) {
        diacritics[latin] = latin + latin.toUpperCase();
      }

      diacritics[latin] += diacritic;
    }
  }); //console.log('no_latin',JSON.stringify(no_latin));

  return diacritics;
}
/**
 * Expand a regular expression pattern to include diacritics
 * 	eg /a/ becomes /aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑAⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ/
 *
 */

var diacritics = null;
function diacriticRegexPoints(regex) {
  if (diacritics === null) {
    diacritics = generateDiacritics();
  }

  for (let latin in diacritics) {
    if (diacritics.hasOwnProperty(latin)) {
      regex = regex.replace(new RegExp(latin, 'g'), '[' + diacritics[latin] + ']');
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

export { asciifold, diacriticRegexPoints, generateDiacritics };
//# sourceMappingURL=diacritics.js.map
