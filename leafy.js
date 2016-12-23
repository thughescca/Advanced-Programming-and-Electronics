var mymap = L.map('mapid').setView([37.80724, -122.269712], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/thughescca/civrgx3sz004x2jrzmfhcptn8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGh1Z2hlc2NjYSIsImEiOiJjaXZyZ3V2NnQwNDRnMnpxdjI3OXdwNXlxIn0.90Hp63M51nUucDtuScbixA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 20, 
    minZoom: 17,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);

//Create a marker layer (in the example done via a GeoJSON FeatureCollection)
var testlayer = mymap;
var sliderControl = L.control.sliderControl({position: "topright", layer: testlayer});

//Make sure to add the slider to the map ;-)
mymap.addControl(sliderControl);

//And initialize the slider
sliderControl.startSlider();
// $('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(0, 19));
sliderControl = L.control.sliderControl({position: "topright", layer: testlayer, range: true});
sliderControl = L.control.sliderControl({position: "topright", layer: testlayer, follow: 3});
sliderControl = L.control.sliderControl({position: "topright", layer: testlayer, rezoom: 10});

var redIcon = L.icon({
    iconUrl: './icons/Business.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var orangeIcon = L.icon({
    iconUrl: './icons/Shops.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var yellowIcon = L.icon({
    iconUrl: './icons/Food.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var greenIcon = L.icon({
    iconUrl: './icons/Cafe.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var blueIcon = L.icon({
    iconUrl: './icons/School.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var indigoIcon = L.icon({
    iconUrl: './icons/Nightlife.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var violetIcon = L.icon({
    iconUrl: './icons/Parking.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [30, 98], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var brownIcon = L.icon({
    iconUrl: './icons/Health.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var blackIcon = L.icon({
    iconUrl: './icons/Government.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var goldIcon = L.icon({
    iconUrl: './icons/Park.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var silverIcon = L.icon({
    iconUrl: './icons/Venue.svg', // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
//businesses
L.marker([37.80724, -122.269712], {icon: redIcon}).addTo(mymap);
//30-day Boot Camp
L.marker([37809413, -122.270610], {icon: redIcon}).addTo(mymap);
//Enlisted Design
L.marker([37.808043, -122.269101], {icon: redIcon}).addTo(mymap);
//Ella Baker Center
L.marker([37.808578, -122.267960],{icon: redIcon}).addTo(mymap);
//Rose Foundations For Communities & the Environment
L.marker([37.808646, -122.267954], {icon: redIcon}).addTo(mymap);
//The Oakland Tribune
L.marker([37.808706, -122.267837], {icon: redIcon}).addTo(mymap);
//Oakland Scientific Facility-Lawerence Berkeley Labratory
L.marker([37.808597, -122.267386], {icon: redIcon}).addTo(mymap);
//African Braiding Salon
L.marker([37.808334, -122.268287], {icon: redIcon}).addTo(mymap);
//Lotus Bloom
L.marker([37.808203, -122.271456], {icon: redIcon}).addTo(mymap);
//Oakland Ice Center
L.marker([37.807422, -122.271415], {icon: redIcon}).addTo(mymap);
//Bay Area Legal Aid
L.marker([37.807401, -122.271415], {icon: redIcon}).addTo(mymap);
//Medium Plenty
L.marker([37.807285,-122.270471], {icon: redIcon}).addTo(mymap);
//East Bay Korean Senior Citzen
L.marker([37.807285, -122.270471], {icon: redIcon}).addTo(mymap);
//Uptown 19th St BART Bike Station
L.marker([37.807784, -122.269412], {icon: redIcon}).addTo(mymap);
//MerusCase
L.marker([37.807700, -122.269297], {icon: redIcon}).addTo(mymap);
//KMTJ Investments LP
L.marker([37.807746, -122.269594], {icon: redIcon}).addTo(mymap);
//MM
L.marker([37.807715, -122.269589], {icon: redIcon}).addTo(mymap);
//Chen Design Associates
L.marker([37.807576, -122.269407], {icon: redIcon}).addTo(mymap);
//EVB
L.marker([37.807431, -122.269700], {icon: redIcon}).addTo(mymap);
//All Out Comedy Theater
L.marker([37.807096, -122.269896], {icon: redIcon}).addTo(mymap);
//Youth Radio
L.marker([37.806874, -122.269946], {icon: redIcon}).addTo(mymap);
//Oakland Community Partners
L.marker([37.807547, -122.268857], {icon: redIcon}).addTo(mymap);
//Urban Strategies Council
L.marker([37.806916, -122.269270], {icon: redIcon}).addTo(mymap);
//Pathways To Wellness Clinic
L.marker([37.806701, -122.269396], {icon: redIcon}).addTo(mymap);
//PGA Design
L.marker([37.806590, -122.269279], {icon: redIcon}).addTo(mymap);
//Powerhouse
L.marker([37.806691, -122.269037], {icon: redIcon}).addTo(mymap);
//Utility API
L.marker([37.806694, -122.268965], {icon: redIcon}).addTo(mymap);
//Broad Center For the Management
L.marker([37.806602, -122.268988], {icon: redIcon}).addTo(mymap);
//Rockwood Leadership Institute
L.marker([37.806602, -122.268869], {icon: redIcon}).addTo(mymap);
//Engeo Inc
L.marker([37.806883, -122.271831], {icon: redIcon}).addTo(mymap);
//532 16th St
L.marker([37.806488, -122.271625], {icon: redIcon}).addTo(mymap);
//JT2 Integrated Resources
L.marker([37.806708, -122.270976], {icon: redIcon}).addTo(mymap);
//Girls Inc. of Alameda County
L.marker([37.806423, -122.270979], {icon: redIcon}).addTo(mymap);
//Design Partnership
L.marker([37.806700, -122.270530], {icon: redIcon}).addTo(mymap);
//World of Braids
L.marker([37.806525, -122.270584], {icon: redIcon}).addTo(mymap);
//Eviction Defense Center
L.marker([37.806480, -122.270775], {icon: redIcon}).addTo(mymap);
//California Youth Connection
L.marker([37.806392, -122.270561], {icon: redIcon}).addTo(mymap);
//As You Sow Foundation
L.marker([37.806288, -122.270797], {icon: redIcon}).addTo(mymap);
//Barefoot Movement
L.marker([37.806636, -122.270002], {icon: redIcon}).addTo(mymap);
//GreenBiz Group
L.marker([37.806184, -122.271554], {icon: redIcon}).addTo(mymap);
//Monsoon Company
L.marker([37.806122, -122.271542], {icon: redIcon}).addTo(mymap);
//Environmental Science Associates
L.marker([37.806135, -122.271438], {icon: redIcon}).addTo(mymap);
//Turner Construction Company
L.marker([37.805814, -122.270876], {icon: redIcon}).addTo(mymap);
//Otis McAllister
L.marker([37.805755, -122.270887], {icon: redIcon}).addTo(mymap);
//Facing History & Ourselves
L.marker([37.805736, -122.270832], {icon: redIcon}).addTo(mymap);
//Global Investment Co
L.marker([37.805699, -122.271538], {icon: redIcon}).addTo(mymap);
//California PTC (California Prevention Training Center)
L.marker([37.805650, -122.271522], {icon: redIcon}).addTo(mymap);
//Boxer & Gerson, LLP
L.marker([37.805698, -122.271417], {icon: redIcon}).addTo(mymap);
//Scientific Learning Corporation
L.marker([37.805632, -122.271330], {icon: redIcon}).addTo(mymap);
//Ume Yoga
L.marker([37.805475, -122.270801], {icon: redIcon}).addTo(mymap);
//SPUR Oakland
L.marker([37.805808, -122.269771], {icon: redIcon}).addTo(mymap);
//Broadly.com
L.marker([37.805640, -122.269958], {icon: redIcon}).addTo(mymap);
//Fair Trade USA
L.marker([37.805538, -122.270002], {icon: redIcon}).addTo(mymap);
//Lucky Money
L.marker([37.805462, -122.270250], {icon: redIcon}).addTo(mymap);
//Liberty Healthcare Services
L.marker([37.805151, -122.269509], {icon: redIcon}).addTo(mymap);
//Shops
//JC Gold Teeth Jewelry
L.marker([37.808409,-122.268251], {icon: orangeIcon}).addTo(mymap);
//Denmar
L.marker([37.808232, -122.268380], {icon: orangeIcon}).addTo(mymap);
//FASTSIGNS
L.marker([37.807684, -122.267863], {icon: orangeIcon}).addTo(mymap);
//Piedmon Piano Co
L.marker([37.807666, -122.272028], {icon: orangeIcon}).addTo(mymap);
//California Loan & Jewelers
L.marker([37.807137,-122.270351], {icon: orangeIcon}).addTo(mymap);
//Bibliomania
L.marker([37.807903, -122.269704], {icon: orangeIcon}).addTo(mymap);
//Hat Guys
L.marker([37.807437, -122.268898], {icon: orangeIcon}).addTo(mymap);
//Oakland Coin & Jewelry Exchange
L.marker([37.807108, -122.269730], {icon: orangeIcon}).addTo(mymap); 
//Grace Beauty Supply
L.marker([37.807065, -122.269705], {icon: orangeIcon}).addTo(mymap); 
//Oakstop
L.marker([37.807016, -122.269744], {icon: orangeIcon}).addTo(mymap);
//Solespace
L.marker([37.807056, -122.269971], {icon: orangeIcon}).addTo(mymap);
//Zaya Cafe
L.marker([37.807514, -122.268971], {icon: orangeIcon}).addTo(mymap);
//Hill's Shoes
L.marker([37.806943, -122.269084], {icon: orangeIcon}).addTo(mymap);
//Kuhl Frames +Art: Custom Picture Framing
L.marker([37.806765, -122.270607], {icon: orangeIcon}).addTo(mymap);
//RPR Architects
L.marker([37.806635, -122.270616], {icon: orangeIcon}).addTo(mymap);
//Urban Stitch Boutique
L.marker([37.806691, -122.270107], {icon: orangeIcon}).addTo(mymap);
//Both Side Convenience
L.marker([37.806525, -122.270188], {icon: orangeIcon}).addTo(mymap);
//Suru
L.marker([37.806438, -122.270148], {icon: orangeIcon}).addTo(mymap);
//Shoe Groupie Boutique
L.marker([37.806424, -122.270074], {icon: orangeIcon}).addTo(mymap);
//Aardvark Laser Engraving
L.marker([37.806364, -122.270154], {icon: orangeIcon}).addTo(mymap);
//Viscera
L.marker([37.805952, -122.269911], {icon: orangeIcon}).addTo(mymap);
//Bay Area Rapid Press
L.marker([37.805498, -122.270225], {icon: orangeIcon}).addTo(mymap);
//Cobblers Shoes
L.marker([37.805952, -122.269911], {icon: orangeIcon}).addTo(mymap);
//Calculated Clothing
L.marker([37.805138, -122.269509], {icon: orangeIcon}).addTo(mymap);
//Food
//Little Giant Ice Cream
L.marker([37.809310, -122.269894], {icon: yellowIcon}).addTo(mymap);
//Xolo
L.marker([37.808292,-122.269571], {icon: yellowIcon}).addTo(mymap);
//Flora Resturant & Bar
L.marker([37.808117, -122.268034], {icon: yellowIcon}).addTo(mymap);
//Duende
L.marker([37.808117, -122.269571], {icon: yellowIcon}).addTo(mymap);
//Subway
L.marker([37.808292, -122.268034], {icon: yellowIcon}).addTo(mymap);
//Billy's
L.marker([37.808381, -122.268312], {icon: yellowIcon}).addTo(mymap);
//Donut Savant
L.marker([37.807054, -122.270362], {icon: yellowIcon}).addTo(mymap);
//Rudy's Can't Fail Cafe
L.marker([37.807803, -122.270362], {icon: yellowIcon}).addTo(mymap);
//Camber Resturant & Bar
L.marker([37.807054, -122.270362], {icon: yellowIcon}).addTo(mymap);
//Diving Dog Brewhouse
L.marker([37.807672, -122.269603], {icon: yellowIcon}).addTo(mymap);
//Itani Ramen
L.marker([37.807511, -122.269853], {icon: yellowIcon}).addTo(mymap);
//Sweet Belly Desserts
L.marker([37.807601, -122.268875], {icon: yellowIcon}).addTo(mymap);
//Prospect Park Sandwiches
L.marker([37.806511, -122.270107], {icon: yellowIcon}).addTo(mymap);
//Saigon
L.marker([37.805927, -122.271599], {icon: yellowIcon}).addTo(mymap);
//Crossburgers
L.marker([37.805439, -122.271442], {icon: yellowIcon}).addTo(mymap);
//Ma Me House
L.marker([37.805107, -122.269733], {icon: yellowIcon}).addTo(mymap);
//Ichiro
L.marker([37.805157, -122.269618], {icon: yellowIcon}).addTo(mymap);
//The Hatch
L.marker([37.805057, -122.269555], {icon: yellowIcon}).addTo(mymap);
//Five 10 Pizza
L.marker([37.805069, -122.269490], {icon: yellowIcon}).addTo(mymap);
//Quick Bite
L.marker([37.805029, -122.269400], {icon: yellowIcon}).addTo(mymap);
//The Layover
L.marker([37.805163, -122.269343], {icon: yellowIcon}).addTo(mymap);
//Open
L.marker([37.805049, -122.269640], {icon: yellowIcon}).addTo(mymap);
//Cafe
//The Bodega at Duende
L.marker([37.808089, -122.269442], {icon: greenIcon}).addTo(mymap);
//Marana Cafe
L.marker([37.808508, -122.271593], {icon: greenIcon}).addTo(mymap);
//Jon's Music & Repair Shop
L.marker([37.807826, -122.269481], {icon: greenIcon}).addTo(mymap); 
//Fat Cat Cafe
L.marker([37.807245, -122.269987], {icon: greenIcon}).addTo(mymap);
//Caffe Teatro
L.marker([37.805481, -122.271220], {icon: greenIcon}).addTo(mymap);
//education
//Sweets ballroom
L.marker([37.808291,-122.269055], {icon: blueIcon}).addTo(mymap);
//Oakland School for the Arts
L.marker([37.807890,-122.270797], {icon: blueIcon}).addTo(mymap);
//The National Equity Project
L.marker([37.806852, -122.269154], {icon: blueIcon}).addTo(mymap);
//Night Life
//Uptown Night club
L.marker([37.808581, -122.269481], {icon: indigoIcon}).addTo(mymap);
//Fauna
L.marker([37.808215, -122.269676], {icon: indigoIcon}).addTo(mymap);
//Make Westing
L.marker([37.807528, -122.270285], {icon: indigoIcon}).addTo(mymap);
//Industry 151 LLC
L.marker([37.807385, -122.270545], {icon: indigoIcon}).addTo(mymap);
//Somar Bar
L.marker([37.807330, -122.270306], {icon: indigoIcon}).addTo(mymap);
//Wood Bar & Brewery
L.marker([37.807010, -122.270066], {icon: indigoIcon}).addTo(mymap);
//The Punchdown
L.marker([37.807387, -122.269566], {icon: indigoIcon}).addTo(mymap);
//Cafe Van Kleef
L.marker([37.806552, -122.270533], {icon: indigoIcon}).addTo(mymap);
//Dogwood
L.marker([37.806656, -122.270047], {icon: indigoIcon}).addTo(mymap);
//Darling's Elixirs
L.marker ([37.806636, -122.269939], {icon: indigoIcon}).addTo(mymap);
//Parking
//Central Parking
L.marker([37.808338, -122.269055], {icon: violetIcon}).addTo(mymap);
//18th St Uptown Parking Lot
L.marker([37.808338, -122.272161], {icon: violetIcon}).addTo(mymap);
//City of Oakland Parking Partners
L.marker([37.807045, -122.268503], {icon: violetIcon}).addTo(mymap);
//Rotunda Garage
L.marker([37.806768, -122.271355], {icon: violetIcon}).addTo(mymap);
//Latham Square Garage
L.marker([37.806371, -122.270700], {icon: violetIcon}).addTo(mymap);
//Douglas parking broadway and 17th
L.marker([37.806428, -122.269625], {icon: violetIcon}).addTo(mymap);
//medical
//Patient ID Center
L.marker([37.807437, -122.269948], {icon: brownIcon}).addTo(mymap);
//Dr. John W. Roark Jr, MD
L.marker([37.805786, -122.271021], {icon: brownIcon}).addTo(mymap);
//Western Dental
L.marker([37.805645, -122.269856], {icon: brownIcon}).addTo(mymap);
//Darryl Klawitter Chiropractor
L.marker([37.807804, -122.267788], {icon: brownIcon}).addTo(mymap);
//Government
// Jewish Voice For Peace
L.marker([37.806375, -122.270598], {icon: blackIcon}).addTo(mymap);
//AC Transit
L.marker([37.805709, -122.268962], {icon: blackIcon}).addTo(mymap);
//Bay Area Legal Aid
L.marker([37.807425, -122.270285], {icon: blackIcon}).addTo(mymap);
//Venue
//Fox Theater
L.marker([37.807995, -122.270066], {icon: silverIcon}).addTo(mymap);
//Rotunda
L.marker([37.805785, -122.271126], {icon: silverIcon}).addTo(mymap);
//Berkeley Youth Orchestra
L.marker([37.805973, -122.268971], {icon: silverIcon}).addTo(mymap);
//Gritty City Repertory Youth Theatre
L.marker([37.805514, -122.269907], {icon: silverIcon}).addTo(mymap);
//The Flight Deck
L.marker([37.805474, -122.269975], {icon: silverIcon}).addTo(mymap);
//Virago Theatre Company
L.marker([37.805330, -122.270092], {icon: silverIcon}).addTo(mymap);
//park
//Henry J Kaiser Memorial Park
L.marker([37.808875,-122.271181], {icon: goldIcon}).addTo(mymap);