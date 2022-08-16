$(document).ready(() => {
    $('#add').click(() => {
        let $toAdd = $('#inputFromUser[name=ListItem]').val()
        if ($('#inputFromUser[name=ListItem]').val().length < 2) {
            alert('please type')
        } else {
            $('ul').append('<li>' + $toAdd + '<hr><div id="userOutputBtn"></div>' + '</li>')
            $('button#btnDone').css('backgroundColor', 'green')
            $('button#btnDone').css('padding', '10px')
            $('button#btnDone').css('fontSize', '1.2rem')
            $('button#btnDone').css('border', 'none')
            $('button#stopBtn').css('backgroundColor', 'red')
            $('button#stopBtn').css('fontSize', '1.2rem')
            $('button#stopBtn').css('padding', '10px')
            $('button#stopBtn').css('border', 'none')
        }
        $('#inputFromUser[name=ListItem]').val(' ')
       $(document).on('click', 'li', function () {
            $(this).toggleClass('strike').fadeOut('slow')
        })
    })
})