(function ($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  var author = $('.validate-input input[name="author"]');
  var body = $('.validate-input input[name="body"]');
  var defination = $('.validate-input textarea[name="defination"]');
  var goals = $('.validate-input input[name="goals"]');
  var link = $('.validate-input input[name="link"]');
  var reference = $('.validate-input textarea[name="reference"]');
  var year = $('.validate-input input[name="year"]');

  $(".validate-form").on("submit", function (event) {
    event.preventDefault();
    var check = true;

    if ($(author).val().trim() == "") {
      showValidate(author);
      check = false;
    }
    if ($(body).val().trim() == "") {
      showValidate(body);
      check = false;
    }

    if ($(defination).val().trim() == "") {
      showValidate(defination);
      check = false;
    }
    if ($(goals).val().trim() == "") {
      showValidate(goals);
      check = false;
    }
    if ($(link).val().trim() == "") {
      showValidate(link);
      check = false;
    }
    if ($(reference).val().trim() == "") {
      showValidate(reference);
      check = false;
    }

    if ($(year).val().trim() == "") {
      showValidate(year);
      check = false;
    }

    return check;
  });

  $(".validate-form .input1").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);
