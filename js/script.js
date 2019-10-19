var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Loc = /** @class */ (function () {
    function Loc(location, description, adress, zipcode, img, city) {
        this.location = "";
        this.description = "";
        this.adress = "";
        this.img = "";
        this.city = "";
        this.location = location;
        this.description = description;
        this.adress = adress;
        this.zipcode = zipcode;
        this.img = img;
        this.city = city;
    }
    Loc.prototype.display = function () {
        return "<div class=\"media p-5\">\n        <img src=" + this.img + " alt=\"\" class=\"mr-3 mt-3 rounded-circle\" style=\"width:150px;height:150px;\">\n        <div class=\"media-body\">\n            <div class=\"text-container pl-2\">\n                <h4>" + this.location + "</h4><br>\n                 <p>" + this.description + "</p>\n                 <div id=\"place-type\">\n                 " + this.adress + "<br>" + this.zipcode + "<br>" + this.city + "\n                 </div>\n            </div>\n        </div>";
    };
    return Loc;
}());
var carl = new Loc("Karlsplatz", "This square, in English St.Charles Square, is a town square on the border of the first and fourth districts of Vienna. It is one of the most frequented and best connected transportation hubs in Vienna.", "Kreuzherrengasse 1", 1040, "../img/karl.jpg", "Vienna");
var zoo = new Loc("Schoenbrunn Zoo", "A trip to Sch\u00F6nbrunn Zoo. From penguins and orangutans to giant pandas: discover more than 700 species of animals in the unique setting of this UNESCO wonder. ", "Maxingstrasse 13b", 1130, "../img/zoo.jpg", "Vienna");
var arrLoc = [carl, zoo];
for (var i = 0; i < arrLoc.length; i++) {
    document.getElementsByClassName("loc-container")[i].innerHTML += arrLoc[i].display();
}
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(location, description, adress, zipcode, img, city, tel, website) {
        var _this = _super.call(this, location, description, adress, zipcode, img, city) || this;
        _this.tel = tel;
        _this.website = website;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return "<div class=\"media  p-5\">\n        <img src=" + this.img + " alt=\"\" class=\"mr-3 mt-3 rounded-circle\" style=\"width:150px;height:150px;\">\n        <div class=\"media-body\">\n            <div class=\"text-container pl-2\">\n                <h4>" + this.location + "</h4><br>\n                 <p>" + this.description + "</p>\n                 <div id=\"place-type\">\n                 " + this.adress + "<br>" + this.zipcode + "<br>" + this.city + "<br>" + this.tel + "<br><a href=\"" + this.website + "\">" + this.website + "</a></a>\n                 </div>\n            </div>\n        </div>";
    };
    return Restaurants;
}(Loc));
var lemon = new Restaurants("Lemon", "At Lemon we are constantly searching for the aromas and flavors of Austria. Join us in the world of Lemon, share our passion and let us present our country\u2019s harvest in the most delicious light.", "Kettenbr\u00FCckengasse 19", 1050, "../img/lemon.png", "Vienna", "0660443322", "http://www.lemonleaf.at");
var sixta = new Restaurants("Sixta", "The sensitivity between creative cuisine and a traditional, Viennese offer determines our cuisine. We attach great importance to product quality, production quality and the best possible taste. The changing menu takes seasonal specialities and delicacies into account.", "Sch\u00F6nbrunner Strasse 21", 1050, "../img/sixta.png", "Vienna", "0660443323", "http://www.sixta-restaurant.at/");
var arrRest = [lemon, sixta];
for (var i = 0; i < arrRest.length; i++) {
    document.getElementsByClassName("rest-container")[i].innerHTML += arrRest[i].display();
}
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(location, description, adress, zipcode, img, city, tel, website, date, price) {
        var _this = _super.call(this, location, description, adress, zipcode, img, city) || this;
        _this.website = website;
        _this.date = date;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"media p-5\">\n        <img src=" + this.img + " alt=\"\" class=\"mr-3 mt-3 rounded-circle\" style=\"width:150px;height:150px;\">\n        <div class=\"media-body\">\n            <div class=\"text-container pl-2\">\n                <h4>" + this.location + "</h4><br>\n                 <p>" + this.description + "</p>\n                 <div id=\"place-type\">\n                 " + this.adress + "<br>" + this.zipcode + "<br>" + this.city + "<br><a href=\"" + this.website + "\">" + this.website + "</a></a><br>" + this.date + "\n                 </div>\n            </div>\n        </div>";
    };
    return Events;
}(Loc));
var kris = new Events("Kris Kristofferson", "Kristoffer Kristofferson (born June 22, 1936) is an American singer-songwriter and actor. Among his songwriting credits are the songs \"Me and Bobby McGee\", \"For the Good Times\", \"Sunday Mornin' Comin' Down\", and \"Help Me Make It Through the Night\", all of which were hits for other artists.", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "../img/kris.jpg", "Vienna", "", "http://kriskristofferson.com/", "Fr.,15.11.2019. 20:00", "58,50 EUR");
var lenny = new Events("Lenny Kravitz", "Leonard Albert Kravitz (born May 26, 1964) is an American singer, songwriter, actor, record producer, and multi-instrumentalist. His \"retro\" style incorporates elements of rock, blues, soul, R&B, funk, jazz, reggae, hard rock, psychedelic, pop, folk, and ballads.", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", 1150, "../img/lenny.jpg", "Vienna", "", "http://www.lennykravitz.com/", "Sat,09.12.2019,19:30", "47,80 EUR");
var arrEve = [lenny, kris];
for (var i = 0; i < arrEve.length; i++) {
    document.getElementsByClassName("eve-container")[i].innerHTML += arrEve[i].display();
}
