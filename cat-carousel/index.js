'use strict';

$('.thumbnail').on('click', e => {

  event.preventDefault();

  //console.log('test');
  //console.log(e.target);
  let imgsrc = $(e.target).attr('src');
  let imgalt = $(e.target).attr('alt');
  //console.log(imgsrc);
  //console.log(imgalt);

  $('img.hero').attr('src', imgsrc);
  $('img.hero').attr('alt', imgalt);
});
