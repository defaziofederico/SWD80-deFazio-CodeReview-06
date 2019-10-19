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
       return`${this.location},${this.description},${this.adress},${this.zipcode},${this.img},${this.city}`;
       display() {return ${` <div class="media  p-3">
        <img src=${this.img} alt="" class="mr-3 mt-3 rounded-circle" style="width:150px;height:150px;">
        <div class="media-body">
            <div class="text-container pl-5 pt-10">
                <h4>${this.location}</h4>
                // <p>${this.description}</p>
                 <div id="place-type">
                 ${this.adress}${this.zipcode}${this.city}
                 </div>
            </div>
        </div>`
   }}
  }

   
var carl = new Loc (`Karlsplatz`,`T`, `Kreuzherrengasse 1`,1040,`../img/karl.jpg,`,`Vienna`);

var zoo = new Loc (`Schoenbrunn Zoo`,
  `A`,`Maxingstrasse 13b`,1130,`../img/zoo.jpg`,`Vienna`);

var arrLoc= [carl,zoo]; 
for (let i = 0; i < arrLoc.length; i++) {
  document.getElementsByClassName("loc-container")[i].innerHTML +=arrLoc[i].display();

}  

class Restaurants extends Loc  {
   tel:"";
   website:"";

  
constructor(location, description,adress,zipcode,img,city,tel,website) {
    super(location,description,adress,zipcode,img, city) 
       this.tel=tel;
       this.website=website;
   }
   display() { 
       return`${this.location},${this.description},${this.adress},${this.zipcode},${this.img},${this.city},${this.tel},${this.website}`;
       
   }
   
}
var lemon=new Restaurants (`Lemon`,`A`,`Kettenbrückengasse 19`,1050,`../img/zoo.jpg`,`Vienna`,0660443322,`www.lemon.at`);
 var sixta=new Restaurants (`Sixta`,`T`,`Schönbrunner Strasse 21`, 1050, `../img/sixta.png`,`Vienna`,"0134523", `http://www.sixta.at`);

var arrRest= [lemon,sixta]; 
for (let i = 0; i < arrRest.length; i++) {
  document.getElementsByClassName("rest-container")[i].innerHTML +=arrRest[i].display();
}

class Events extends Loc { 
   date:""; 
   price:"";   
constructor(location, description,adress,zipcode,img,city,tel,website,date,price) {
       super(location, description,adress,zipcode,img,city,tel,website) 
       this.date=date;
       this.price=price;
   }
   display() { 
       return`${this.location},${this.description},${this.adress},${this.zipcode},${this.img},${this.city},${this.website},${this.date},${this.price}`;
     
   }
}
var kris=new Events(`Kris Kristofferson`,`K`,`Wiener Stadthalle, Halle F, Roland Rainer Platz 1`, 1150, `./img/kris.jpg`,`Vienna`,`kriskristofferson.com/`,`Fr., 15.11.2019. 20:00`,`58,50 EUR`);
var lenny=new Events(`Lenny Kravitz`,`L`,`Wiener Stadthalle - Halle D, Roland Rainer Platz 1`, 1150,`./img/lenny.jpg`,`Vienna`,`lennykravitz.com`,`Sat,09.12.2019,19:30`,`47,80 EUR`);


var arrEve= [lenny,kris]; 
for (let i = 0; i < arrEve.length; i++) {
  document.getElementsByClassName("eve-container")[i].innerHTML +=arrEve[i].display();
}