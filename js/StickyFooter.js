$(window).bind("load", function() { 
	var footerH, headerH, contentH = false; 
	var contentMP = false; 
  var $footer = $("#footer");
  var $header = $("#header");
  var $content = $("#content");
  positionFooter();
  function positionFooter() {
  	if (!contentMP) {
	  	footerH = parseInt($footer.css('marginTop').replace('px', ''));
	  	footerH = footerH + parseInt($footer.css('marginBottom').replace('px', ''));
	  	footerH = footerH + parseInt($footer.css('paddingTop').replace('px', ''));
	  	footerH = footerH + parseInt($footer.css('paddingBottom').replace('px', ''));
	    footerH = footerH + $footer.height();
	    console.log(footerH);

	  	headerH = parseInt($header.css('marginTop').replace('px', ''));
	  	headerH = headerH + parseInt($header.css('marginBottom').replace('px', ''));
	  	headerH = headerH + parseInt($header.css('paddingTop').replace('px', ''));
	  	headerH = headerH + parseInt($header.css('paddingBottom').replace('px', ''));
	    headerH = headerH + $header.height();
	    console.log(headerH);

	    contentMP = 0;
  		contentMP = contentMP + parseInt($content.css('marginTop').replace('px', ''));
  		contentMP = contentMP + parseInt($content.css('marginBottom').replace('px', ''));
  		contentMP = contentMP + parseInt($content.css('paddingTop').replace('px', ''));
  		contentMP = contentMP + parseInt($content.css('paddingBottom').replace('px', ''));
	}

    contentH = contentMP + $content.height();
    console.log(contentH);

    var footerT = ($(window).scrollTop()+$(window).height()-footerH-1)+"px";
    //headerH = $header.height();
    //contentH = $content.height();

    // DEBUGGING STUFF

    /*console.log("Document height: ", $(document.body).height());
    console.log("Window height: ", $(window).height());
    console.log("Window scroll: ", $(window).scrollTop());
    console.log("Footer height: ", footerH);
    console.log("Footer top: ", footerTop);
    console.log("-----------")
    console.log("Header height: ", header1);
    console.log("Content height: ", content1);
    console.log("-----------")*/

    console.log((headerH+contentH+footerH));
    console.log($(window).height());
    if ( (headerH+contentH+footerH+20) < $(window).height()) {
      $footer.css({
        position: "absolute",
        top: footerT
      }).stop();
    } else {
      $footer.css({
        position: "static"
      });
    }
  }
  $(window)
  .scroll(positionFooter)
  .resize(positionFooter)   
});