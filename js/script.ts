class Loc  { 
   location= "";
   description="";
   adress= ""; 
   zipcode:number; 
   img="";  
   city="";


constructor(location,description,adress,zipcode,img,city) { 
       this.location=location;
       this.description=description;
       this.adress=adress;
       this.zipcode=zipcode;
       this.img=img;
       this.city=city;
   }    
   display() {
     return `<div class="media  p-3">
        <img src=${this.img} alt="" class="mr-3 mt-3 rounded-circle" style="width:150px;height:150px;">
        <div class="media-body">
            <div class="text-container pl-5 pt-10">
                <h4>${this.location}</h4><br>
                 <p>${this.description}</p>
                 <div id="place-type">
                 ${this.adress}<br>${this.zipcode}<br>${this.city}
                 </div>
            </div>
        </div>`
  }
  }

   
var carl = new Loc (`Karlsplatz`,`This square, in English St.Charles Square, is a town square on the border of the first and fourth districts of Vienna. It is one of the most frequented and best connected transportation hubs in Vienna.`,`Kreuzherrengasse 1`,1040,`../img/karl.jpg`,`Vienna`);

var zoo = new Loc (`Schoenbrunn Zoo`,
  `A trip to Schönbrunn Zoo. From penguins and orangutans to giant pandas: discover more than 700 species of animals in the unique setting of this UNESCO wonder. `,`Maxingstrasse 13b`,1130,`../img/zoo.jpg`,`Vienna`);

var arrLoc= [carl,zoo]; 
for (let i = 0; i < arrLoc.length; i++) {
  document.getElementsByClassName("loc-container")[i].innerHTML +=arrLoc[i].display();

}  

class Restaurants extends Loc  {
tel:"";
website:"";

  
constructor(location,description,adress,zipcode,img,city,tel,website) {
super(location,description,adress,zipcode,img, city) 
this.tel=tel;
this.website=website;
}
display() { 
return `<div class="media  p-3">
        <img src=${this.img} alt="" class="mr-3 mt-3 rounded-circle" style="width:150px;height:150px;">
        <div class="media-body">
            <div class="text-container pl-5 pt-10">
                <h4>${this.location}</h4><br>
                 <p>${this.description}</p>
                 <div id="place-type">
                 ${this.adress}<br>${this.zipcode}<br>${this.city}<br>${this.tel}<br>${this.website}
                 </div>
            </div>
        </div>`
       
}
   
}
var lemon=new Restaurants (`Lemon`,`At Lemon we are constantly searching for the aromas and flavors of Austria. Join us in the world of Lemon, share our passion and let us present our country’s harvest in the most delicious light.`,`Kettenbrückengasse 19`,1050,`../img/lemon.png`,`Vienna`,`0660443322`,`http://www.lemonleaf.at`);
var sixta=new Restaurants (`Sixta`,`The sensitivity between creative cuisine and a traditional, Viennese offer determines our cuisine. We attach great importance to product quality, production quality and the best possible taste. The changing menu takes seasonal specialities and delicacies into account.`,`Schönbrunner Strasse 21`,1050,`../img/sixta.png`,`Vienna`,`0660443323`,`http://www.sixta-restaurant.at/`);

var arrRest= [lemon,sixta]; 
for (let i = 0; i < arrRest.length; i++) {
document.getElementsByClassName("rest-container")[i].innerHTML +=arrRest[i].display();
}

class Events extends Loc { 
date:""; 
price:"";   
constructor(location,description,adress,zipcode,img,city,tel,website,date,price) {
super(location,description,adress,zipcode,img,city,tel,website) 
this.website=website;
this.date=date;
this.price=price;
}
display() { 
return `<div class="media  p-3">
        <img src=${this.img} alt="" class="mr-3 mt-3 rounded-circle" style="width:150px;height:150px;">
        <div class="media-body">
            <div class="text-container pl-5 pt-10">
                <h4>${this.location}</h4><br>
                 <p>${this.description}</p>
                 <div id="place-type">
                 ${this.adress}<br>${this.zipcode}<br>${this.city}<br>${this.website}<br>${this.date}
                 </div>
            </div>
        </div>`
     
}
}
var kris=new Events(`Kris Kristofferson`,`Kristoffer Kristofferson (born June 22, 1936) is an American singer-songwriter and actor. Among his songwriting credits are the songs "Me and Bobby McGee", "For the Good Times", "Sunday Mornin' Comin' Down", and "Help Me Make It Through the Night", all of which were hits for other artists.`,`Wiener Stadthalle, Halle F, Roland Rainer Platz 1`, 1150,`../img/kris.jpg`,`Vienna`,``,`http://kriskristofferson.com/`,`Fr.,15.11.2019. 20:00`,`58,50 EUR`);

var lenny=new Events(`Lenny Kravitz`,`Leonard Albert Kravitz (born May 26, 1964) is an American singer, songwriter, actor, record producer, and multi-instrumentalist. His "retro" style incorporates elements of rock, blues, soul, R&B, funk, jazz, reggae, hard rock, psychedelic, pop, folk, and ballads.`,`Wiener Stadthalle - Halle D, Roland Rainer Platz 1`, 1150,`../img/lenny.jpg`,`Vienna`,``,
  `http://www.lennykravitz.com/`,`Sat,09.12.2019,19:30`,`47,80 EUR`);


var arrEve= [lenny,kris]; 
for (let i = 0; i < arrEve.length; i++) {
document.getElementsByClassName("eve-container")[i].innerHTML +=arrEve[i].display();
}