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

Finish Leaflet map and start designing Website.

Week 4

Finish Website and fix any css issues.

REFERENCES


https://www.codecademy.com/en/tracks/htmlcss
http://leafletjs.com/examples/map-panes/
http://leafletjs.com/examples/layers-control/
http://leafletjs.com/examples/choropleth/
http://leafletjs.com/examples/custom-icons/
http://leafletjs.com/examples/quick-start/
