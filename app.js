"use strict";
$(document).ready(function () {

});



$(".add").click(function (e) {
    e.preventDefault();
    let a = (a) => {
        if (!($("input").val()) == '') {
            for (let i = 0; i < a; i++) {
                $('.button').append(`<h3>${a}</h3>`);
            }
        } else {
            return
        }
    }
    a($('input').val());
    $('input').val();
});


