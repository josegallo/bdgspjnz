jQuery(function($){ 
    var UrlToInspect = top.location.pathname;
    var substringUrlToCheck = UrlToInspect.substring(0,4).toString();
    var urlEnglishLength = top.location.pathname.length;
    console.log(urlEnglishLength);
    
    if (urlEnglishLength >= 4 && substringUrlToCheck == '/en/') {
        // console.log ('it has at least 4 letters and it is english');
        var indexToChange = $('div#ez-toc-container p.ez-toc-title ');
        indexToChange.text("Index");
    } 
});
