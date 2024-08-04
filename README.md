## Towns API  

### Description  

Open REST API about european towns and context of them: old cathedrals and fortresses.    

More than 480 european towns with coordinates and country TLD.   

You can use geocoding based on searching with *centum.js* library.    

### Technologies  

Server was built on *ExpressJS* with middlewares.    

### URLs  

*https://towns-api.onrender.com* - base URL    

*https://towns-api.onrender.com/towns* - list of towns    

*https://towns-api.onrender.com/town/:title* - find of town by title (geocoding)     

*https://towns-api.onrender.com/towns-fragment/:start&:end* - sliced list of towns   

*https://towns-api.onrender.com/timezones* - list of european towns's timezones   

*https://towns-api.onrender.com/capitals* - list of european capitals with additional information    

*https://towns-api.onrender.com/cathedrals* - oldest european cathedrals of many towns with interesting information

*https://towns-api.onrender.com/fortresses* - fortresses with additional information 


### Examples

~~~
    const [towns, setTowns] = useState<TownType[]>([])	  

    useEffect(() => {
        fetch('https://towns-api.onrender.com/towns-fragment/76&199')  // getting list of russian towns	
        	.then(res => res.json())
            .then(data => setTowns(data)) 
    }, [user]) 
~~~