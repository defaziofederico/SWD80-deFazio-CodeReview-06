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
        return this.location + "," + this.description + "," + this.adress + "," + this.zipcode + "," + this.img + "," + this.city;
        display();
        {
            return $;
            {
                " <div class=\"media  p-3\">\n        <img src=" + this.img + " alt=\"\" class=\"mr-3 mt-3 rounded-circle\" style=\"width:150px;height:150px;\">\n        <div class=\"media-body\">\n            <div class=\"text-container pl-5 pt-10\">\n                <h4>" + this.location + "</h4>\n                // <p>" + this.description + "</p>\n                 <div id=\"place-type\">\n                 " + this.adress + this.zipcode + this.city + "\n                 </div>\n            </div>\n        </div>";
            }
        }
    };
    return Loc;
}());
var carl = new Loc("Karlsplatz", "T", "Kreuzherrengasse 1", 1040, "../img/karl.jpg,", "Vienna");
var zoo = new Loc("Schoenbrunn Zoo", "A", "Maxingstrasse 13b", 1130, "../img/zoo.jpg", "Vienna");
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
        return this.location + "," + this.description + "," + this.adress + "," + this.zipcode + "," + this.img + "," + this.city + "," + this.tel + "," + this.website;
    };
    return Restaurants;
}(Loc));
var lemon = new Restaurants("Lemon", "A", "Kettenbr\u00FCckengasse 19", 1050, "../img/zoo.jpg", "Vienna", 0660443322, "www.lemon.at");
var sixta = new Restaurants("Sixta", "T", "Sch\u00F6nbrunner Strasse 21", 1050, "../img/sixta.png", "Vienna", "0134523", "http://www.sixta.at");
var arrRest = [lemon, sixta];
for (var i = 0; i < arrRest.length; i++) {
    document.getElementsByClassName("rest-container")[i].innerHTML += arrRest[i].display();
}
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(location, description, adress, zipcode, img, city, tel, website, date, price) {
        var _this = _super.call(this, location, description, adress, zipcode, img, city, tel, website) || this;
        _this.date = date;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return this.location + "," + this.description + "," + this.adress + "," + this.zipcode + "," + this.img + "," + this.city + "," + this.website + "," + this.date + "," + this.price;
    };
    return Events;
}(Loc));
var kris = new Events("Kris Kristofferson", "K", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "./img/kris.jpg", "Vienna", "kriskristofferson.com/", "Fr., 15.11.2019. 20:00", "58,50 EUR");
var lenny = new Events("Lenny Kravitz", "L", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", 1150, "./img/lenny.jpg", "Vienna", "lennykravitz.com", "Sat,09.12.2019,19:30", "47,80 EUR");
var arrEve = [lenny, kris];
for (var i = 0; i < arrEve.length; i++) {
    document.getElementsByClassName("eve-container")[i].innerHTML += arrEve[i].display();
}
