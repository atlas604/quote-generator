#Random Quote Generator

In this mini-sprint, you will need to create a webpage that displays a random quote
when the user clicks a button on the page. The content of the quotes is up to you, but
you may want to consider appropriateness if you plan on saving your project on GitHub.


This project comes with some boilerplate code for you to use as a reference. Notice how
external files in the `styles` and `scripts` directories are referenced in the `index.html`. 
This is standard practice; this is makes it clearer to people looking at the project to know
where to find specific files. It is also a 'separation of concerns'. All the HTML is contained 
in one doc; all CSS is in another; and all JavaScript is in another. Take some time
to note how the CSS and JavaScript files are pulled into the HTML doc. 


Before you begin coding, open `index.html` in your browser and keep it open while you're
working. Refresh the page in your browser whenever you make changes. 


##Requirements

###Basic Requirements
1. Add the necessary jQuery code to `main.js` to wait until the HTML document is ready.

2. Create a JavaScript array of quotes. The quotes should be JavaScript objects following this 
pattern: `{ quote: "Lorem ipsum", speaker: "Some Person" }`. The array should contain at least 
10 quote objects. 

3. Create an event listener that displays the first quote in the appropriate div tags when the button
is clicked. 

4. Create a function called `randomIndex` that takes an array as a parameter and returns a random
index value based on the argument array. 

5. Refactor the previous event listener to display a quote at a random index. 

6. Add CSS to your page and make it look pretty! 

###Extra Credit
1. When the user clicks to get a new quote, change the theme of the page to something different. 
For example, you could change the background color of the page, change the font color, font family.
Let your imagination run wild!

2. Use more events! Up the interactivity of your page for your user. Consider adding effects for when
the user hovers over certain components. Consider adding jQuery animations to give your page a 
smooth feel. 

###Nightmare Mode
1. Instead of hard coding the quotes into your script, incorporate a quotes API. Use AJAX to query the
API and display the returned quote. 