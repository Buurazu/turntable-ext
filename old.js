/*var stickStr = prompt('String:') + ' ';
var currFrm = 0;
if (typeof stickTmr == 'number') {
    clearInterval(stickTmr);
}
stickTmr = setInterval("ttApi({api:'sticker.place',placements:stickLtrs[stickStr[currFrm]]});currFrm++;if(currFrm==stickStr.length){currFrm=0;}", 1000);

var test = new Array();
ttApi({api:'sticker.get_placements',userid: "4f7abb02eb35c154c000066b"},function (data) { test = data; console.log(test);});

var currFrm = 0;
if (typeof stickTmr == 'number') {
    clearInterval(stickTmr);
}
stickTmr = setInterval("ttApi({api:'sticker.place',placements:frames[(currFrm+1).toString()]});currFrm++;if(currFrm==35){currFrm=0;}", 1000);
*/