var url = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/'
var rndmurl = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/btc'

var rndmbtn = document.querySelector('#rndmbtn');
rndmbtn.addEventListener("click", function(){
    fetch(rndmurl)
    .then(rndmStock)

})
function rndmStock(){
    $.getJSON(rndmurl)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
})
}


var tslaurl = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/tsla'

var tslabtn = document.querySelector('#tslabtn');
tslabtn.addEventListener("click", function(){
    fetch(tslaurl)
    .then(teslaStock)

})
function teslaStock(){
    $.getJSON(tslaurl)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
})
}


var applurl = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/aapl'


var applbtn = document.querySelector('#applbtn');
applbtn.addEventListener("click", function(){
    fetch(applurl)
    .then(appleStock)

})
function appleStock(){
    $.getJSON(applurl)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
    })
}

var rokuurl = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/roku'

var rokubtn = document.querySelector('#rokubtn');
rokubtn.addEventListener("click", function(){
    fetch(rokuurl)
    .then(rokuStock)

})
function rokuStock(){
    $.getJSON(rokuurl)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
})
}


var shopurl = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/shop'

var shopbtn = document.querySelector('#shopbtn');
shopbtn.addEventListener("click", function(){
    fetch(shopurl)
    .then(shopStock)

})
function shopStock(){
    $.getJSON(shopurl)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
})
}


var zmurl = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/zm'

var zmbtn = document.querySelector('#zmbtn');
zmbtn.addEventListener("click", function(){
    fetch(zmurl)
    .then(zmStock)

})
function zmStock(){
    $.getJSON(zmurl)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
})
}

var msfturl = 'https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/msft'

var msftbtn = document.querySelector('#msftbtn');
msftbtn.addEventListener("click", function(){
    fetch(msfturl)
    .then(msftStock)

})
function msftStock(){
    $.getJSON(msfturl)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
})
}

function openPage(){
    var search = document.getElementById("searchText").value;
    var searchURL = `https://cors-anywhere.herokuapp.com/https://www.styvio.com/api/${search}`
    fetch(searchURL)
    .then(searchStock)
function searchStock(){
    $.getJSON(searchURL)
    .done(function(data){
       $('#nameofStock').text(data.shortName);
       $('#tickerSymbol').text(data.ticker);
       $('#currentPrice').text(data.currentPrice);
       $('#stockImage').attr("src", data.logoURL);
})
}
}