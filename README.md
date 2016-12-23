# Advanced-Programming-and-Electronics Project 1 (Embedding Videos)

I created a website with 3 examples of uploading videos onto webpages. Embedding, embedding live video, and uploading raw HTML. The first problem I ran into was I tried running HTML on p5 and after realizing I needed a program like Sublime I still didn’t switch the extension to HTML. After a quick tutorial from Kailen I was able to figure out how to apply all the notes I took down on video to web output and use some of the coding. With uploading the raw HTML I took a random video I had and moved it to a folder that I could find and used the name of the file in my code so that the website could retrieve the information from my computer. Then I added a player with code I found online, muted the video, and looped it. For the Youtube video it was as simple as copy and pasting the Embed Code. Lastly, for embedding live video I had to download other third party streaming interface. I used XSplitBroadcaster and Youtube simultaneously and took the embed code and put it into my website. Though the video stream was live, it was very laggy due to the internet connection

---------------------------------------------------------------------------------------------------------------------------------

# Advanced-Programming-and-Electronics Project 2 (Projection Mapping)

Using Grasshopper and Firefly (Rhino Plug-Ins) I created a field of mesh shapes that move in accordance with any motion that is sensed through the webcam of my laptop. Though it’s not ideally Projection Mapping by manipulating where, what, and how the camera is used could very well be used to create a projection mapping screen. Grasshopper uses blocks that code for you when you connect them together, each of the blocks can be created by searching through the tabs and clicking or double-clicking and typing in the name of the block. The main components for this project were 3 blocks. 

The first block is the The Webcam Video Stream block. The Web Cam Video Stream component automatically connects to your default video capture device (if available) and begin returning a custom Firefly Bitmap which can be passed through various filters.  This component also supports multiple cameras. You can right-click on the image above to change the camera settings for the video capture. 

The second block is the Mesh from Image block. This block creates a mesh from image data the height of the mesh is controlled by the luminance of each pixel.  

The third block is the Video Analysis block. It discovers the average direction of movement and centroids of color within the pixels defined by a bounding box within a Firefly bitmap. This component searches within the rectangle and determines the average direction of movement (vector) as well as the average colors.  Multiple bounding boxes can be defined as search areas within an image to determine the general direction of movement and average colors within that area.

The initial problems I ran into were creating the mesh forms and getting the code blocks used in Rhino to read what I wanted using the webcam. However with the help of Jeff (Future Cities Lab and Recent mARCH grad) I was able to acquire more information about Grasshopper and how it works. Notes taken when talking with him: 

Scroll click – menu

Disable – to save space

Hide – doesn’t show but still runs it

Mesh measures difference in color with height 

Video analysis*

MD sliders 

0,0 (1st one)

1,1 (2nd one)

//1 = size of webcam

-z move + z vector w/ coordinates

Mesh goes below dots

Average Color connected to centroid of movement 

--PT -- sphere //1 small sphere

Tracks movement

Right click > Floating viewport 

Rhino viewport -> monitor project hide/ delete components

Construct domain remaps the numbers coming in/out

Changing the size of the elements depending on distance

Debugging > unload grasshopper

Swatch- for color change

In conclusion, Grasshopper takes intense coding and mathematic algorithms and makes it into an easier visual interface that designers can use.

-----------------------------------------------------------------------------------------------------------------------------------

# Design Proposal

SUMMARY

For the first time in the Interior Design department our 2 studio classes are combining to have a "double-final" on December 6th. I'm interested in integrating all of the classes I'm taking this semester into this project as well. Our assignment is to create a proposal to renovate for a 3 story building in Oakland and turn it into a Beauty/Design School. My concept is about connecting with the community and after seeing Kailen's presentation with Leaflet, I thought it would be interesting to turn my diagrams about the surrounding area into an interactive website or app the students attending could use to learn more about the community they are in and which areas are safer.

WHAT CAN THE USER INTERACT WITH?

Ideally I would make a complete website using css and embedding (videos and the interactive map) and it would pair with the map. I would imagine there would be interactive screens throughout the building students could stop by and use.

COMPONENTS

Sublime (HTML coding)
Leaflet (Interactive Map)
Longitude/Latitude Coordinates for each icon
Diagrams/Work produced in my Studios

BREAKDOWN

Week 1

Figure out all components and programming requirements.

Week 2

Learn Leaflet and begin creating map.

Week 3

Finishing leaflet map.

Week 4

Finish interactive map!

REFERENCES


https://www.codecademy.com/en/tracks/htmlcss
http://leafletjs.com/examples/map-panes/
http://leafletjs.com/examples/layers-control/
http://leafletjs.com/examples/choropleth/
http://leafletjs.com/examples/custom-icons/
http://leafletjs.com/examples/quick-start/

----------------------------------------------------------------------------------------------------------------------------------------

# Leaflet Map Project 3 (Interactive Map)

Combining what I learned with embeding and what Kailen helped me with for starting the leaflet map I was able to start a base for my project to build on. The first step was getting the code from the website and setting a profile on the mapbox website. By making a profile on the website and signing up it allowed me access to the basis of the project which is the map that my information would lay over. Following that i had to set up my different filetypes, which mainly consisted of the icons, javascript code, css code, and the html file.

After setting the other files up I had to turn all my images into SVG files or Scalable Vector Graphics. The file type is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. Now that I had all the pieces set up I just had to figure how to piece them together. Using the snippet of code that was provided for the marker I was able to figure out how to include my own icons. The code for the icons pulls imagess from files in the folder your using for the code overall, but you have to configure the file path. (I.E. : ./icons/Business.svg') As I was figuring this out I was having trouble creating multiple icons because I figured the file path was the only thing that had to be changed when in fact there is another part of the code that has to be changed when specifying the location of the icon as well. ( {icon: redIcon}).addTo(mymap); ) With the help from Micheal I was able to figure out a way to organize it so I wouldnt get too confused since I do have so many icons types and that was by changing the color before the "Icon." 

To get the locations of the icons pin-pointed in the correct position i used google maps, however I realized that the map in google maps and mapbox are calibrated slightly different. This forced me to have to individually toggle the numbers and redo the longitude and latitude multiple times to get the icons to display in the correct place. Though the code in the js file is over 380+ lines long a decent portion of it is comments of the typologies and listing the same format but changing the line based on the location and icon type. 

In the html code its mostly leaflet, jquery and slider scripts. Unfortunatley I was never able to get the slider to work on my map. I have the code in for the slider but when the slider is clicked and I try to use it, it fails to slide. As far as the css code goes, its pretty much just pertaining to the size of the map, in the future i plan on changing it back to 55% (so it becomes slimmer vertically) so I can add more details and information on the sides of the "website." Some notes I took down when Kailen helped me with Leaflet are:

"/" are the equivalent to >...>...> (folder paths)

scripts = java script files ljs (script src)

href=links

div id = only can be used for unique paths

div class= generalize changes to multiple paths
