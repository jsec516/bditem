/*globals jQuery,io*/
jQuery(document).ready(function () {
  jQuery('ul.sf-menu').superfish({
    animation: {height: 'show'}, // slide-down effect without fade-in
    delay: 800 // 1.2 second delay on mouseout
  });
});

jQuery('.carousel').carousel({
  interval: 8000,
  scrollerAlignment: 'vertical',
  autoScroll: true
});

io.socket.get('/subscribe', function responseFromServer (body, response) {
  console.log("The server responded with status " + response.statusCode + " and said: ", body);
});

io.socket.on('hello', function (msg) {
  console.log('msg from hello event: ', msg);
});
