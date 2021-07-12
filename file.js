function customConsole() {
	
	window.cleanData = function(str) {
		str = str.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
		str = str.replace("officialaudio","").replace("officialvideo","").replace("officialmusicvideo","");
		str = str.replace("remastered","").replace("officialhdvideo","").replace("remix","");
		str = str.replace("lyricvideo","").replace("musicvideo","").replace("originalvideo","");
		
		return str;
	}
	
	window.findConnects = function(queueSong) {
		//Take the artist and title currently playing, convert to lowercase, remove whitespace and non-alphanumeric characters
		var results = "";
		var artist; var title;
		
		var maxResults = 24;
		var currResults = 0;
		
		if (turntable.current_artist == null) {
			return false;
		}
		else {
			artist = turntable.current_artist;
			title = turntable.current_title;
		}
		
		artist = cleanData(artist);
		title = cleanData(title);
		
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
		var firstFound = -1;
		
		ttApi({api:'playlist.all',playlist_name:'default'},function (data) {
			//check in reverse, so the least-played song gets auto-moved to top
			for (cur = 0; cur < data.list.length; cur++) {
				var item = data.list[cur];
				if (item._id != turntable.current_songid) {
					var artist2 = cleanData(item.metadata.artist);
					var title2 = cleanData(item.metadata.song);
					for (i = 0; i < poss.length; i++) {
						if ((artist2.search(poss[i]) != -1 || title2.search(poss[i]) != -1)) {
							results = results + poss[i].toUpperCase() + ": " + item.metadata.artist + " - " + item.metadata.song + "\n";
							if (currResults == 0) firstFound = cur;
							currResults++;
							break;
						}
					}
					if (currResults >= maxResults) break;
				}
			}
			
			if (queueSong && currResults > 0) {
				turntable.playlist.reorder(firstFound,0);
				setTimeout("turntable.playlist.loadList();",100);
			}
			
			if (results == "") results = "No connects found!";
			document.getElementById("footer").innerText = results;
		});
		

}; //end of window.findConnects

window.CTSstickers = {
//Twitter, Pride, Turntable
"1": 
	[
	{
        "top": 19,
        "angle": 0,
        "sticker_id": "603be170468d7b3c03065ad9",
        "left": 158
    },
    {
        "top": 19,
        "angle": 0,
        "sticker_id": "603be170468d7b3c03065ad9",
        "left": 235
    },
    {
        "top": 111,
        "angle": 90,
        "sticker_id": "603be170468d7b3c03065ad9",
        "left": 198
    },
    {
        "top": 222,
        "angle": 90,
        "sticker_id": "603be170468d7b3c03065ad9",
        "left": 198
    },
    {
        "top": 235,
        "angle": 22.0212017255,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 77
    },
    {
        "top": 214,
        "angle": 37.67881201,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 33
    },
    {
        "top": 184,
        "angle": 71.683127126,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 2
    },
    {
        "top": 131,
        "angle": 102.387859717,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": -9
    },
    {
        "top": 79,
        "angle": 117.208860155,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": -6
    },
    {
        "top": 41,
        "angle": 162.072096838,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 15
    },
    {
        "top": 15,
        "angle": -183.484231391,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 67
    },
    {
        "top": 240,
        "angle": 0.920927754959,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 309
    },
    {
        "top": 229,
        "angle": -10.790508006,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 346
    },
    {
        "top": 195,
        "angle": -73.32670971130288,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 381
    },
    {
        "top": 142,
        "angle": -135.772158494,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 369
    },
    {
        "top": 110,
        "angle": -139.45032225066186,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 321
    },
    {
        "top": 17,
        "angle": -20.80435440251138,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 355
    },
    {
        "top": 57,
        "angle": -58.4484125094,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 308
    }
],
//nasa, gamestop, twitter
"2": [
	{
        "top": 12,
        "angle": 0,
        "sticker_id": "603bda8c468d7b3a37249f00",
        "left": 97
    },
    {
        "top": 141,
        "angle": 90,
        "sticker_id": "603bda8c468d7b3a37249f00",
        "left": 91
    },
    {
        "top": 14,
        "angle": 57.4714466858,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 88
    },
    {
        "top": 31,
        "angle": 55.636951347,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 56
    },
    {
        "top": 55,
        "angle": 40.7154417976,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 32
    },
    {
        "top": 87,
        "angle": 13.0919822041,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 12
    },
    {
        "top": 127,
        "angle": -1.21121555925,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 8
    },
    {
        "top": 168,
        "angle": -20.4467705487,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 14
    },
    {
        "top": 202,
        "angle": -36.0521287224,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 35
    },
    {
        "top": 228,
        "angle": -44.6133530481,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 68
    },
    {
        "top": 236,
        "angle": -69.0795771495,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 101
    },
    {
        "top": 12,
        "angle": -161.136412444,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 382
    },
    {
        "top": 30,
        "angle": 152.418614734,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 337
    },
    {
        "top": 69,
        "angle": 129.068484551,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 299
    },
    {
        "top": 120,
        "angle": 66.541612452,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 312
    },
    {
        "top": 139,
        "angle": 22.0943893971,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 355
    },
    {
        "top": 164,
        "angle": -101.041956027,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 398
    },
    {
        "top": 207,
        "angle": -36.690528618,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 397
    },
    {
        "top": 234,
        "angle": 11.5891195249,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 353
    },
    {
        "top": 223,
        "angle": 37.2573649284,
        "sticker_id": "603bdd48468d7b3ae1c39844",
        "left": 301
    }
],

//turntable nyan nasa
"3": [
	{
        "top": 191,
        "angle": 90,
        "sticker_id": "603bdf45468d7b3b8ae41ee5",
        "left": 163
    },
    {
        "top": 107,
        "angle": 90,
        "sticker_id": "603bdf45468d7b3b8ae41ee5",
        "left": 163
    },
    {
        "top": 24,
        "angle": 90,
        "sticker_id": "603bdf45468d7b3b8ae41ee5",
        "left": 163
    },
    {
        "top": -2,
        "angle": 0,
        "sticker_id": "603bdf45468d7b3b8ae41ee5",
        "left": 172
    },
    {
        "top": 16,
        "angle": -12.321201061819977,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 65
    },
    {
        "top": 44,
        "angle": -22.064959858576287,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 18
    },
    {
        "top": 101,
        "angle": -65.59643440444239,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": -19
    },
    {
        "top": 172,
        "angle": -117.40062070538202,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": -13
    },
    {
        "top": 205,
        "angle": -133.0340205740179,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 21
    },
    {
        "top": 229,
        "angle": -147.70693170224888,
        "sticker_id": "603bdd30468d7b3ada628123",
        "left": 74
    },
    {
        "top": 6,
        "angle": -206.07700852263508,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 398
    },
    {
        "top": 23,
        "angle": -558.2453450672842,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 362
    },
    {
        "top": 41,
        "angle": -192.33243142063597,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 339
    },
    {
        "top": 78,
        "angle": -603.7624995353005,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 335
    },
    {
        "top": 104,
        "angle": -818.2347536622532,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 370
    },
    {
        "top": 127,
        "angle": -94.55833034550992,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 395
    },
    {
        "top": 163,
        "angle": -70.93658738906721,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 403
    },
    {
        "top": 200,
        "angle": -35.26880714078847,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 384
    },
    {
        "top": 222,
        "angle": -12.993910648285663,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 355
    },
    {
        "top": 230,
        "angle": -349.10630935429896,
        "sticker_id": "603be0bc468d7b3bdc139274",
        "left": 323
    }
]
};

window.stickFrames = {
1: [{"top": 104, "angle": 0, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
3: [{"top": 104, "angle": 20, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
5: [{"top": 104, "angle": 40, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
7: [{"top": 104, "angle": 60, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
9: [{"top": 104, "angle": 80, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
11: [{"top": 104, "angle": 100, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
13: [{"top": 104, "angle": 120, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
15: [{"top": 104, "angle": 140, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
17: [{"top": 104, "angle": 160, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
19: [{"top": 104, "angle": 180, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
21: [{"top": 104, "angle": 200, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
23: [{"top": 104, "angle": 220, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
25: [{"top": 104, "angle": 240, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
27: [{"top": 104, "angle": 260, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
29: [{"top": 104, "angle": 280, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
31: [{"top": 104, "angle": 300, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
33: [{"top": 104, "angle": 320, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
35: [{"top": 104, "angle": 340, "sticker_id": "603bdd48468d7b3ae1c39844", "left": 214}],
};
	
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

var stickTmr;

window.animate = function() {
currFrm = 1;
stickTmr = setInterval("ttApi({api:'sticker.place',placements:CTSstickers[(currFrm).toString()]});currFrm++;if(currFrm==4){currFrm=1;}", 12000);
}; //end of window.animate

window.stop = function() {
	clearInterval(stickTmr);
}; //end of window.stop


//check for connects every 10 seconds
connectTmr = setInterval("findConnects();", 10000);

//check for new song being played every second
var curSong = turntable.current_songid;
songTmr = setInterval("checkSong();", 1000);

window.checkSong = function() {
	if (turntable.current_songid != null && turntable.current_songid != curSong) {
		curSong = turntable.current_songid;
		setTimeout("findConnects(true);", 100);
	}
};

/*
function KeyPress(e) {
      var evtobj = window.event? event : e
	  //Ctrl+A
	  if (evtobj.keyCode == 65 && evtobj.ctrlKey) window.animate();
	  //Ctrl+C
      if (evtobj.keyCode == 67 && evtobj.ctrlKey) window.findConnects();
	  //Ctrl+S
	  if (evtobj.keyCode == 83 && evtobj.ctrlKey) window.stop();
	  
}

document.onkeydown = KeyPress;
*/

}


window.onload=function() {
var script = document.createElement('script'),
    code   = document.createTextNode('(' + customConsole + ')();');
script.appendChild(code);
(document.body || document.head).appendChild(script);
}


