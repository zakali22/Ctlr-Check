$(document).ready(function() {
  var text = $('.type input');
  var add = $('.btn-success');
  var remove = $('.btn-danger');

  add.on('click', function() {
    /* Act on the event */
    if (text.val().length > 0) {
      console.log($('.container .message'));
      $('.container .message').remove();
        var value = text.val();
        console.log(value);

        var output = '<div class="item">';
        output += '<input type="checkbox">';
        output += '<p>' + value + '</p>';
        output += '</div>';

        $('.container').append(output);
    } 
  });

  remove.on('click', function() {
    var list = $('.item input');
    console.log(list);
    $.each(list, function(index, item) {
      if (item.checked) {
        item.closest('div').remove();
      }
    });

    console.log($('.container').children().length);
    if ($('.container').children().length === 0) {
      var output = '<div class="item message">';
      output += '<p> There are no items in your list. Please add something.</p>';
      output += '</div>';

      $('.container').append(output);
    }
  });

});
