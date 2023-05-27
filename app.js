"use strict";
$(document).ready(function () {

});



$('.add').click(function (e) {
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
        let a = b => {
            for (let i = 0; i < b; i++) ($('.button').append(`<h3>${b}</h3>`))
        }
        let c = d => Number(d) ? a(d) : $('.button').append(`<h3>${d}</h3>`)
        c($('input').val())
    }
    $('input').val('');
})


