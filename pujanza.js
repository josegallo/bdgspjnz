jQuery(function($){ 

    console.log(top.location.pathname);
    var UrlToInspect = top.location.pathname;
    console.log(UrlToInspect.substring(0,4));
    var substringUrlToCheck = UrlToInspect.substring(0,4).toString();
    console.log (substringUrlToCheck);
    console.log (typeof substringUrlToCheck );
    var urlEnglishLength = top.location.pathname.length;
    console.log(urlEnglishLength);
    
    if (urlEnglishLength >= 4 && substringUrlToCheck == '/en/') {
        // console.log ('it has at least 4 letters and it is english');
        var indexToChange = $('div#ez-toc-container p.ez-toc-title ');
        indexToChange.text("Index");
    } else {
        console.log ('no');
    }
    
});
