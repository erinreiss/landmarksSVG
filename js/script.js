//Load CSV Content using Json

// $.getJSON("convertcsv.json", 
// 	function(content){
//     	console.log(content);
//     	matchData = content;
//     }
// );

// Set up some variables

var locations = $(".location");

// Give speaker name attribute // this doesn't work
$(document).ready(function(){
	$('#67-Bayard').data("lSpeakerName","Ping Chong")
	$('#13-Doyers').data("lSpeakerName","Lori Tan Chinn")
	$('#51-Bayard').attr("lSpeakerName","Margaret Yuen")
});


// Highlight location with mouse over

$(locations).mouseenter(
	function(){
		// console.log(this.id);
		$(locations).not(this).css("opacity", ".39");
		$(this).css('cursor', 'pointer');
	}
);

$(locations).mouseleave(
	function(){
		// console.log("exit");
		$(locations).css("opacity", "1");
		$(this).css('cursor', 'default');
	}
);


//Next2 Element Sound Click Listeners
	// var audiof = $("#fPop")[0];
	// $('#forsythPop').click(function() {
	//   	audiof.pause();
 //    	audiof.load();
 //    	audiof.play();
	// });

// Streets Click Listener
$(locations).click(
	function(){
		// $('#clickStreet').css('visibility','hidden');
		// $('#locationPopup').css('visibility','visible');
		var thisAudio = ("audio/"+this.id+".mp3");
		var thisPhoto = ("images/"+this.id+"-a.jpg");
		console.log(this.id);
		console.log(this.class);
		console.log(this.data-speaker);
		changeTrack(thisAudio);
		$('#speakerPhoto').attr("src",thisPhoto);
		$('.lSpeaker').text(this.title);

				// console.log(matchData[i].lAudio);
				// $('.lSpeaker').text(matchData[i].lSpeaker);
				// $('.jobFill').text(matchData[i].jobFill);
				// $('.timeFill').text(matchData[i].timeFill);
				// $('.fromFill').text(matchData[i].fromFill);
				// $('.bioFill').html("&ldquo;" + matchData[i].bioFill + "&rdquo;");
				// $('#streetTitleCh').html("&ldquo;" + matchData[i].streetTitleCh + "&rdquo;");
				// $('#streetTitleEn').text(matchData[i].streetTitleEn);
				// changeTrack(matchData[i].lAudio);
				// break;
	}
);

//function to reload audio player on each click

function changeTrack(sourceUrl) {
    var audioDues = $("#player");      
    $("#lAudio").attr("src", sourceUrl);
    audioDues[0].pause();
    audioDues[0].load();//suspends and restores all audio element
    audioDues[0].play();
}

// // Next3 Element Click Listeners, why are you so lazy?

// $('#english').click(
// 	function(){
// 		$('#intro3eng').css('visibility','visible');
// 		$('#intro3man').css('visibility','hidden');
// 		$('#intro3fuj').css('visibility','hidden');
// 		$('#intro3can').css('visibility','hidden');
// 	}
// );
// $('#mandarin').click(
// 	function(){
// 		$('#intro3eng').css('visibility','hidden');
// 		$('#intro3man').css('visibility','visible');
// 		$('#intro3fuj').css('visibility','hidden');
// 		$('#intro3can').css('visibility','hidden');
// 	}
// );
// $('#fujianese').click(
// 	function(){
// 		$('#intro3eng').css('visibility','hidden');
// 		$('#intro3man').css('visibility','hidden');
// 		$('#intro3fuj').css('visibility','visible');
// 		$('#intro3can').css('visibility','hidden');
// 	}
// );
// $('#cantonese').click(
// 	function(){
// 		$('#intro3eng').css('visibility','hidden');
// 		$('#intro3man').css('visibility','hidden');
// 		$('#intro3fuj').css('visibility','hidden');
// 		$('#intro3can').css('visibility','visible');
// 	}
// );

// 	//Next3 Element Sound Click Listeners
// 	var audio1 = $("#mbE")[0];
// 	$('#english').click(function() {
// 	  	audio1.pause();
//     	audio1.load();
//     	audio1.play();
// 	});
// 	var audio2 = $("#mbF")[0];
// 	$('#fujianese').click(function() {
// 	  	audio2.pause();
//     	audio2.load();
//     	audio2.play();
// 	});
// 	var audio3 = $("#mbM")[0];
// 	$('#mandarin').click(function() {
// 	  	audio3.pause();
//     	audio3.load();
//     	audio3.play();
// 	});
// 	var audio4 = $("#mbC")[0];
// 	$('#cantonese').click(function() {
// 	  	audio4.pause();
//     	audio4.load();
//     	audio4.play();
// 	});

// // Skip Intro Click Listener

// $('#skipIntro').click(
// 	function(){
// 		$('#skipIntro').css('visibility','hidden');
// 		$('.introPop').css('display','none');
// 		$(hLights).css('visibility','visible');
// 		$('#clickStreet').css('visibility','visible');
// 	}
// );

