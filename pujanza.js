jQuery(function($){ 
    console.log(top.location.pathname);
    var urlToParse = top.location.pathname.substring(0, 3);
    console.log(urlToParse);
    if (urlToParse === '/en/') {
        console.log('this is type the page to change index');
        var indexToChange = $('div#ez-toc-container p.ez-toc-title ');
        indexToChange.text("Index");
        // console.log(indexToChange.text());
    }
});

//for changing correctly specific pages
jQuery(function($){ ls
    console.log(top.location.pathname);
    if (top.location.pathname === '/en/lorem-ipsum/') {
        console.log('this is the page');
        var indexToChange = $('div#ez-toc-container p.ez-toc-title ');
        indexToChange.text("Index");
        // console.log(indexToChange.text());
    }
});
    