function customConsole() {
window.findConnects = function() {
//Take the artist and title currently playing, convert to lowercase, remove whitespace and non-alphanumeric characters
var artist = turntable.current_artist.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
var title = turntable.current_title.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
//The songsByFid include any songs you've removed from your queue; validSongs combines songsByFid and the files[] array
var songs = $(turntable.playlist.songsByFid)[0]; var validSongs = new Array();
$.each(songs, function(i, item) {
	var found = false;
	for (i = 0; i < turntable.playlist.files.length && found == false; i++) {
		if (item.fileId == turntable.playlist.files[i]) {
			validSongs[validSongs.length] = item;
			found = true;
			
		}
	}
});
//Find all the possible 4-letter connects from the artist and title (does not support 3-letter exact word matches)
var poss = new Array();
if (artist.length <= 4) { poss[poss.length] = artist; }
else {
	for (i = 0; i <= artist.length - 4; i++) {
		poss[poss.length] = artist.substr(i,4);
	}
}
if (title.length <= 4) { poss[poss.length] = title; }
else {
	for (i = 0; i <= title.length - 4; i++) {
		poss[poss.length] = title.substr(i,4);
	}
}
//Go through your queue and search for each string in poss[]
$.each(validSongs, function(i, item) {
	var foundOne = false;
	var artist2 = item.metadata.artist.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
	var title2 = item.metadata.song.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
	for (i = 0; i < poss.length; i++) {
		if (artist2.search(poss[i]) != -1 && foundOne == false) {
			console.log("MATCH: " + poss[i] + "; " + item.metadata.artist + " - " + item.metadata.song)
			foundOne = true;
		}
	}
	for (i = 0; i < poss.length; i++) {
		if (title2.search(poss[i]) != -1 && foundOne == false) {
			console.log("MATCH: " + poss[i] + "; " + item.metadata.artist + " - " + item.metadata.song)
			foundOne = true;
		}
	}
})
}; //end of window.findConnects

window.resetStickers = function() {
var a = / Preparing message /i;
for (var b in turntable) {
    var c = turntable[b];
    if (typeof c !== "function") {
        continue
    }
    c.toString = Function.prototype.toString;
    if (a.test(c.toString())) {
        ttApi = c;
    }
}
var myStickers = {
mine:[{top: -33, angle: 239.72956817,left: -72,sticker_id: "4f86febfe77989117e00000a"},
	{top: 262, angle: 405.246818091,left: 475,sticker_id: "4f86febfe77989117e00000a"},
	{top: 311,angle: 134.200708478,left: -23,sticker_id: "4f86febfe77989117e00000a"},
	{top: -64,angle: 309.397160525,left: 424,sticker_id: "4f86febfe77989117e00000a"},
	{top: 261,angle: 0,left: 203,sticker_id: "4f873b32af173a2903816e52"},
	{top: 152,angle: -0.350701903825,left: -106,sticker_id: "4f86fe84e77989117e000008"},
	{top: 147,angle: 0.00230560844905,left: -147,sticker_id: "4f86fe33e77989117e000006"}]
};
	ttApi({api:'sticker.place',placements:myStickers['mine']},function (data) { });
}; //end of window.resetStickers

var stickTmr;

window.animate = function() {
var a = / Preparing message /i;
for (var b in turntable) {
    var c = turntable[b];
    if (typeof c !== "function") {
        continue
    }
    c.toString = Function.prototype.toString;
    if (a.test(c.toString())) {
        window.ttApi = c;
    }
}
var myStickers = {
mine:[{top: -33, angle: 239.72956817,left: -72,sticker_id: "4f86febfe77989117e00000a"},
	{top: 262, angle: 405.246818091,left: 475,sticker_id: "4f86febfe77989117e00000a"},
	{top: 311,angle: 134.200708478,left: -23,sticker_id: "4f86febfe77989117e00000a"},
	{top: -64,angle: 309.397160525,left: 424,sticker_id: "4f86febfe77989117e00000a"},
	{top: 261,angle: 0,left: 203,sticker_id: "4f873b32af173a2903816e52"},
	{top: 152,angle: -0.350701903825,left: -106,sticker_id: "4f86fe84e77989117e000008"},
	{top: 147,angle: 0.00230560844905,left: -147,sticker_id: "4f86fe33e77989117e000006"}]
};
stickFrames = {
1: [{"top": 104, "angle": 0, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
3: [{"top": 104, "angle": 20, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
5: [{"top": 104, "angle": 40, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
7: [{"top": 104, "angle": 60, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
9: [{"top": 104, "angle": 80, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
11: [{"top": 104, "angle": 100, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
13: [{"top": 104, "angle": 120, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
15: [{"top": 104, "angle": 140, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
17: [{"top": 104, "angle": 160, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
19: [{"top": 104, "angle": 180, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
21: [{"top": 104, "angle": 200, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
23: [{"top": 104, "angle": 220, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
25: [{"top": 104, "angle": 240, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
27: [{"top": 104, "angle": 260, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
29: [{"top": 104, "angle": 280, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
31: [{"top": 104, "angle": 300, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
33: [{"top": 104, "angle": 320, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
35: [{"top": 104, "angle": 340, "sticker_id": "4f873b32af173a2903816e52", "left": 214}],
};
CTSstickers = {
//Facebook, pinterest, TT.fm
"1": [{"top": 18, "angle": 0, "sticker_id": "4f86fe33e77989117e000006", "left": 171}, {"top": 89, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 175}, {"top": 208, "angle": 90, "sticker_id": "4f86fe33e77989117e000006", "left": 174}, {"top": 15, "angle": -11.4466714108, "sticker_id": "4f86fea8e77989117e000009", "left": 357}, {"top": 49, "angle": -27.484454361, "sticker_id": "4f86fea8e77989117e000009", "left": 300}, {"top": 101, "angle": -126.946932881, "sticker_id": "4f86fea8e77989117e000009", "left": 284}, {"top": 127, "angle": -147.018753314, "sticker_id": "4f86fea8e77989117e000009", "left": 337}, {"top": 232, "angle": 14.875990297, "sticker_id": "4f86fea8e77989117e000009", "left": 290}, {"top": 189, "angle": -71.8332383041, "sticker_id": "4f86fea8e77989117e000009", "left": 371}, {"top": 19, "angle": 57.4714466858, "sticker_id": "4f86fd3ee77989117e000002", "left": 95}, {"top": 35, "angle": 55.636951347, "sticker_id": "4f86fd3ee77989117e000002", "left": 62}, {"top": 55, "angle": 40.7154417976, "sticker_id": "4f86fd3ee77989117e000002", "left": 32}, {"top": 87, "angle": 13.0919822041, "sticker_id": "4f86fd3ee77989117e000002", "left": 12}, {"top": 127, "angle": -1.21121555925, "sticker_id": "4f86fd3ee77989117e000002", "left": 8}, {"top": 172, "angle": -20.4467705487, "sticker_id": "4f86fd3ee77989117e000002", "left": 15}, {"top": 205, "angle": -36.0521287224, "sticker_id": "4f86fd3ee77989117e000002", "left": 31}, {"top": 234, "angle": -44.6133530481, "sticker_id": "4f86fd3ee77989117e000002", "left": 57}, {"top": 249, "angle": -69.0795771495, "sticker_id": "4f86fd3ee77989117e000002", "left": 91}, {"top": 255, "angle": -76.0880359235, "sticker_id": "4f86fd3ee77989117e000002", "left": 123}],
//Twitter, foursquare, meetup
"2": [{"top": 11, "angle": 0, "sticker_id": "4f86fdede77989117e000003", "left": 171}, {"top": 83, "angle": 89.7508378991, "sticker_id": "4f86fdede77989117e000003", "left": 169}, {"top": 204, "angle": 89.5017883874, "sticker_id": "4f86fdede77989117e000003", "left": 170}, {"top": 240, "angle": 22.0212017255, "sticker_id": "4f86febfe77989117e00000a", "left": 77}, {"top": 219, "angle": 37.67881201, "sticker_id": "4f86febfe77989117e00000a", "left": 33}, {"top": 185, "angle": 71.683127126, "sticker_id": "4f86febfe77989117e00000a", "left": 2}, {"top": 135, "angle": 102.387859717, "sticker_id": "4f86febfe77989117e00000a", "left": -9}, {"top": 83, "angle": 117.208860155, "sticker_id": "4f86febfe77989117e00000a", "left": -6}, {"top": 45, "angle": 162.072096838, "sticker_id": "4f86febfe77989117e00000a", "left": 15}, {"top": 19, "angle": -183.484231391, "sticker_id": "4f86febfe77989117e00000a", "left": 67}, {"top": 240, "angle": 0.920927754959, "sticker_id": "4f86fe15e77989117e000005", "left": 310}, {"top": 232, "angle": -10.790508006, "sticker_id": "4f86fe15e77989117e000005", "left": 345}, {"top": 206, "angle": -82.853495588, "sticker_id": "4f86fe15e77989117e000005", "left": 383}, {"top": 149, "angle": -135.772158494, "sticker_id": "4f86fe15e77989117e000005", "left": 369}, {"top": 111, "angle": -136.036557012, "sticker_id": "4f86fe15e77989117e000005", "left": 332}, {"top": 15, "angle": -15.1450025093, "sticker_id": "4f86fe15e77989117e000005", "left": 379}, {"top": 61, "angle": -58.4484125094, "sticker_id": "4f86fe15e77989117e000005", "left": 316}],
//Etsy, stackoverflow, facebook
"3": [{"top": -7, "angle": 0, "sticker_id": "4f86fe5de77989117e000007", "left": 143}, {"top": 109, "angle": 90.4575557695, "sticker_id": "4f86fe5de77989117e000007", "left": 161}, {"top": 181, "angle": -90.2224450591, "sticker_id": "4f86fe5de77989117e000007", "left": 125}, {"top": 24, "angle": -29.3360013979, "sticker_id": "4f86fd3ee77989117e000002", "left": 410}, {"top": 45, "angle": -42.0116841664, "sticker_id": "4f86fd3ee77989117e000002", "left": 377}, {"top": 72, "angle": -40.885677944, "sticker_id": "4f86fd3ee77989117e000002", "left": 341}, {"top": 101, "angle": -381.822329263, "sticker_id": "4f86fd3ee77989117e000002", "left": 323}, {"top": 125, "angle": -48.9259740293, "sticker_id": "4f86fd3ee77989117e000002", "left": 333}, {"top": 142, "angle": -48.1407397845, "sticker_id": "4f86fd3ee77989117e000002", "left": 362}, {"top": 166, "angle": -25.9249015076, "sticker_id": "4f86fd3ee77989117e000002", "left": 389}, {"top": 201, "angle": 35.6390763116, "sticker_id": "4f86fd3ee77989117e000002", "left": 388}, {"top": 224, "angle": 51.3930705719, "sticker_id": "4f86fd3ee77989117e000002", "left": 365}, {"top": 235, "angle": 93.008377069, "sticker_id": "4f86fd3ee77989117e000002", "left": 338}, {"top": 235, "angle": 90.7957235527, "sticker_id": "4f86fd3ee77989117e000002", "left": 297}, {"top": 22, "angle": -23.6528571772, "sticker_id": "4f86fd32e77989117e000001", "left": 41}, {"top": 83, "angle": -67.8230493882, "sticker_id": "4f86fd32e77989117e000001", "left": -14}, {"top": 151, "angle": -107.821615313, "sticker_id": "4f86fd32e77989117e000001", "left": -15}, {"top": 203, "angle": -135.993789646, "sticker_id": "4f86fd32e77989117e000001", "left": 13}, {"top": 238, "angle": -181.816052426, "sticker_id": "4f86fd32e77989117e000001", "left": 71}],
//Reddit, stickybits, twitter
"4": [{"top": -12, "angle": 59.7506917818, "sticker_id": "4f873b32af173a2903816e52", "left": 48}, {"top": 33, "angle": 19.9968840994, "sticker_id": "4f873b32af173a2903816e52", "left": 4}, {"top": 85, "angle": 0.980432653779, "sticker_id": "4f873b32af173a2903816e52", "left": -2}, {"top": 138, "angle": -23.8808687661, "sticker_id": "4f873b32af173a2903816e52", "left": 8}, {"top": 197, "angle": -66.3438076065, "sticker_id": "4f873b32af173a2903816e52", "left": 50}, {"top": 8, "angle": 0, "sticker_id": "4f86fe84e77989117e000008", "left": 166}, {"top": 77, "angle": 89.0603548616, "sticker_id": "4f86fe84e77989117e000008", "left": 164}, {"top": 196, "angle": 89.8260587132, "sticker_id": "4f86fe84e77989117e000008", "left": 164}, {"top": 12, "angle": -161.136412444, "sticker_id": "4f86febfe77989117e00000a", "left": 382}, {"top": 30, "angle": 152.418614734, "sticker_id": "4f86febfe77989117e00000a", "left": 337}, {"top": 69, "angle": 129.068484551, "sticker_id": "4f86febfe77989117e00000a", "left": 299}, {"top": 120, "angle": 66.541612452, "sticker_id": "4f86febfe77989117e00000a", "left": 312}, {"top": 139, "angle": 22.0943893971, "sticker_id": "4f86febfe77989117e00000a", "left": 355}, {"top": 164, "angle": -101.041956027, "sticker_id": "4f86febfe77989117e00000a", "left": 398}, {"top": 207, "angle": -36.690528618, "sticker_id": "4f86febfe77989117e00000a", "left": 397}, {"top": 234, "angle": 11.5891195249, "sticker_id": "4f86febfe77989117e00000a", "left": 353}, {"top": 223, "angle": 37.2573649284, "sticker_id": "4f86febfe77989117e00000a", "left": 301}]
};
currFrm = 1;
stickTmr = setInterval("ttApi({api:'sticker.place',placements:CTSstickers[(currFrm).toString()]});currFrm++;if(currFrm==5){currFrm=1;}", 1000);
}; //end of window.animate

window.stop = function() {
	clearInterval(stickTmr);
}; //end of window.stop

}

var script = document.createElement('script'),
    code   = document.createTextNode('(' + customConsole + ')();');
script.appendChild(code);
(document.body || document.head).appendChild(script);