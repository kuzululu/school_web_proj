$(document).ready(function(){
	 $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        // for responsive
        responsive:[{
        	breakpoint: 1024,
        	settings:{
        		slidesToShow: 3,
        		infinite: true
        	}
        },{
        	breakpoint: 600,
        	settings:{
        		slidesToShow: 2,
        		dots: true
        	}
        },{
        	breakpoint: 300,
        	settings: "unslick"
        }]
      });
});