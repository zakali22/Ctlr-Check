$(document).ready(function() {
  var text = $('.type input');
  var add = $('.btn-success');
  var remove = $('.btn-danger');

  add.on('click', function() {
    /* Act on the event */
    var value = text.val();
    console.log(value);

    var output = '<div class="item">';
    output += '<input type="checkbox">';
    output += '<p>' + value + '</p>';
    output += '</div>';

    $('.container').append(output);
  });

  remove.on('click', function() {
    var list = $('.item input');
    console.log(list);
    $.each(list, function(index, item) {
      if (item.checked) {
        item.closest('div').remove();
      }
    });
  });

});
