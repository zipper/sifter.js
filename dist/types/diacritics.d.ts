declare type TDiacraticList = {
    [key: string]: string;
};
export declare const DIACRITICS: TDiacraticList;
/**
 * Remove accents
 * via https://github.com/krisk/Fuse/issues/133#issuecomment-318692703
 *
 */
export declare const asciifold: (str: string) => string;
/**
 * Generate a list of diacritics from the list of code points
 *
 */
export declare const generateDiacritics: () => TDiacraticList;
export declare const diacriticRegexPoints: (regex: string) => string;
export {};
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
