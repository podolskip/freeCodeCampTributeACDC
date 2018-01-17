"use strict";

/*SCROLL*/
$(window).scroll(function () {
    var topPosition = $(window).scrollTop();

    if (topPosition > 0 ){
        $(".menuText").fadeOut("slow",function () {
            $(".menuText").hide();
        });
        //$(".menuText").delay(3000).addClass("d-none");
        console.log("Opacity 0");

    } else {
        $(".menuText").fadeIn("slow").show();

        console.log("Opacity 1");
        //$(".menuText").addClass("d-inline-block");
    }

});

/*#1*/

var i = false;

let googleWiki = (searchInput) => {

    return $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: searchInput
        }
    }).then(function (result) {
        console.log(result);
        i = true;
    });
};



let promiseToGetDataFromWiki = new Promise((resolve,reject) => {

    googleWiki('podolski').then(() => {
        if (i){
            resolve("pr0mise works")
        } else if (!i){
            reject("pr0mise rejected")
        };

    });

});

promiseToGetDataFromWiki.then((fromResolve) => {
    console.log(fromResolve);
}).catch((fromReject) => {
    console.log(fromReject);
});

/*#2*/


let generalSearch = ()=>{
    return new Promise((resolve,reject) => {

        googleWiki('football').then((result)=>{
            console.log("1) general search works");
            resolve(result);
        });


    });
};


var searchForSoccerTeam = (searchBox)=>{
    return new Promise((resolve,reject) => {

        googleWiki(searchBox).then((result)=>{
            console.log("2) Soccer team " + searchBox + " found");
            resolve(result);
        });

    });
};

var searchForSoccerPlayer = (searchBox)=>{
    return new Promise((resolve,reject) => {

        googleWiki(searchBox).then((result)=>{
            console.log("3) Soccer player " + searchBox + " found");
            resolve(result);
        });
    });
};

/*generalSearch().then((result)=>{
    console.log(result);
    searchForSoccerTeam('manchester united');
}).then((result)=>{
    console.log(result);
    searchForSoccerPlayer('rooney');
}).then((result)=> {

    console.log("4) Everything is done!")
    console.log(result);
});*/

/*Promise.all([generalSearch(),searchForSoccerTeam('manchester united'),searchForSoccerPlayer('rooney')]).then(()=> {
    console.log(" wverything is done");
});*/

Promise.race([generalSearch(),searchForSoccerTeam('manchester united'),searchForSoccerPlayer('rooney')]).then(()=> {
    console.log("one of them finished");
});