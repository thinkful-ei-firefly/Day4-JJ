'use strict';

$('.thumbnail').on('click', e => {

  console.log('test');
  console.log(e.target);
  let imgsrc = $(e.target).attr('src');
  let imgalt = $(e.target).attr('alt');
  console.log(imgsrc);
  console.log(imgalt);

  $('div.hero'>'img').attr('src', imgsrc);
  $('div.hero'>'img').attr('alt', imgalt);
});
