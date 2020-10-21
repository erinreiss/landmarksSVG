//Load CSV Content using Json

// $.getJSON("convertcsv.json", 
// 	function(content){
//     	console.log(content);
//     	matchData = content;
//     }
// );

// Set up some variables

var locations = $(".location");

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

// Location Click Listener

$(locations).click(
	function(){
		var thisAudio = ("audio/"+this.id+".mp3");
		var thisPhotoA = ("images/"+this.id+"-a.jpg");
		var thisPhotoB = ("images/"+this.id+"-b.jpg");
		var thisPhotoC = ("images/"+this.id+"-c.jpg");
		var speaker = $(this).data("speaker");
		console.log(thisPhotoC);
		changeTrack(thisAudio);
		currentSlide(1);
		$('#speakerPhotoA').attr("src",thisPhotoA);
		$('#speakerPhotoB').attr("src",thisPhotoB);
		$('#speakerPhotoC').attr("src",thisPhotoC);
		$('.lSpeaker').text(speaker);
		//old stuff im keeping for now
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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}