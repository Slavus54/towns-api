## Towns API  

### Description  

Open REST API about european towns and context of them: old cathedrals and fortresses.    

600 european towns with coordinates and country TLD.   

You can use geocoding based on searching with *codus.js* library.    

### Technologies  

Server was built on *ExpressJS* with middlewares.    

### URLs  

*https://towns-api.vercel.app* - base URL    

**/towns** - list of towns    

**/town/:title** - find of town by title (geocoding)     

**/towns-fragment/:start&:end** - sliced list of towns   

**/timezones** - list of european towns's timezones   

**/capitals** - list of european capitals with additional information    

**/cathedrals** - oldest european cathedrals of many towns with interesting information

**/fortresses** - fortresses with additional information 