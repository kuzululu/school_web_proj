$(document).ready(function() {    
  
  // execute the slideShow, set 3 seconds (3000) for each image
  imgfading(500);

});
//end function

//start function
function imgfading(speed) {

  // set the opacity of all images to 0
  $('ul.imgfading li').css({opacity: 0.0});
  
  // get the first image and display it
  $('ul.imgfading li:first').css({opacity: 1.0}).addClass('show');
  
  // call the gallery function to run the slideshow  
  var timer = setInterval('gallery()',speed);
  
  // pause the slideshow on mouse over
  $('ul.imgfading').hover(
    function () {
      clearInterval(timer); 
    },  
    function () {
      timer = setInterval('gallery()',speed);     
    }
  );  
}
// end funtion

//start function
function gallery() {

  //if no images have the show class, grab the first image
  var current = ($('ul.imgfading li.show')?  $('ul.imgfading li.show') : $('#ul.imgfading li:first'));

  // trying to avoid speed issue
  if(current.queue('fx').length == 0) {

    // get the next image, if it reached the end of the slideshow, rotate it back to the first image
    var next = ((current.next().length) ? ((current.next().attr('id') == 'imgfading-caption')? $('ul.imgfading li:first') :current.next()) : $('ul.imgfading li:first'));
      
    // get the next image caption
    var desc = next.find('img').attr('alt');  
  
    // set the fade in effect for the next image, show class has higher z-index
    next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
    
    // hide the caption first, and then set and display the caption
    $('#imgfading-caption').slideToggle(300, function () { 
      $('#imgfading-caption p').html(desc); 
      $('#imgfading-caption').slideToggle(500); 
    });   
  
    // hide the current image
    current.animate({opacity: 0.0}, 1000).removeClass('show');

  }
}