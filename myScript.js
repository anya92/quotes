$(document).ready(function() {
    var randomNum;
    var randomQuote;
    var randomAuthor;
    var url = 'quotes.json';
    function getQuote() {
        $.getJSON(url, function(data) {
            randomNum = Math.floor((Math.random() * data.quotes.length));
            randomQuote = data.quotes[randomNum];
            randomAuthor = data.authors[randomNum];
            $(".quote").text(randomQuote);
            $(".author").text(randomAuthor);
            console.log(data);
        });
    }
    getQuote();
    $('.get_quote').on('click', function(event) {
        event.preventDefault();
        getQuote();
    });


});
