$(document).ready(function() {
    var quote;
    var author;

    function getQuote() {
        $.getJSON('quotes.json', function(data) {
            randomNum = Math.floor((Math.random() * data.quotes.length));
            randomQuote = data.quotes[randomNum];
            randomAuthor = data.authors[randomNum];
            $(".quote").text(randomQuote);
            $(".author").text(randomAuthor);
            console.log(data.quotes[0]);
        });
    }
    getQuote();
    $('.get_quote').on('click', function(event) {
        event.preventDefault();
        getQuote();
    });


});
