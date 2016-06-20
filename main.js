var quotebank = [
    {
        quote: "Luck is what happens when preparation meets opportunity.",
        author: "Seneca"
    },
    {
        quote: "Know thyself, nothing in excess, make a pledge and mischief is nigh.",
        author: "Delphi"
    },
    {
        quote: "True knowledge exists in knowing that you know nothing.",
        author: "Socrates"
    },
    {
        quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        author: "Martin Luther King, Jr."
    },
    {
        quote: "Glory is fleeting, but obscurity is forever.",
        author: "Napoleon Bonaparte"
    },
    {
        quote: "Pain is temporary. Quitting lasts forever.",
        author: "Lance Edward Armstrong"
    },
    {
        quote: "Man proposes, God disposes.",
        author: "Thomas a Kempis"
    },
    {
        quote: "The only real mistake is the one from which we learn nothing.",
        author: "Henry Ford"
    },
    {
        quote: "Quality means doing it right when no one is looking.",
        author: "Henry Ford"
    },
    {
        quote: "Education is what remains after one has forgotten what one has learned in school.",
        author: "Albert Einstein"
    }
  ]


$('#button').click(function () {

    function randomIndex(array) {
        var n = Math.floor(Math.random() * (array.length));
        return n;
    }

    var i = quotebank[randomIndex(quotebank)];
    $('#quote').empty();
    $('#speaker').empty();
    $('#quote').append(i.quote);
    $('#speaker').append(i.author);

});
