const imageContainer=document.getElementById('image-container');
const loader = document.getElementById('loader');
let ready=false;
let imagesLoaded=0;
let totalImages=0;
let photosArray=[];

//Unsplash API
const count=5;
const apiKey='rqgigjkVwo4FA8FCnz7nPXRPcQhEggfPkQqahzb2XdE';
const apiUrl=`https://api.unsplash.com/photos/random/
?client_id=${apiKey}&count=${count}`;
//Check if all images were loaded

function imageLoaded(){
    console.log('image loaded');
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready=true;
        loader.hidden = true;
        count=30;
        console.log('ready=', ready);
    }
}

//Helper Function to set attributes on DOM Elements
function setAttributes( element,attributes){
for(const key in attributes){
    element.setAttribute(key,attributes[key]);
}
}

//Create Elements for Links and Photos, Add to DOM
function displayPhotos(){
    imagesLoaded=0;
    totalImages=photosArray.length;
    console.log('totalImages=', totalImages);
    //Run function for each object in photosArray
    photosArray.forEach((photo)=>{
        //create <a> to link to unsplash
     const item = document.createElement('a');
     setAttributes(item, {href: photo.links.html,target:'_blank'});
      
    //Create img for photo
     const img = document.createElement('img');
     setAttributes(img,{
        src:photo.urls.regular,
        alt:photo.alt_description,
        title:photo.alt_description, 
    });
      //EventListener, check when each is finished loading
      img.addEventListener('load',imageLoaded);
      //Put <img> inside <a>, then put both inside the Image Container element
    item.appendChild(img);
    imageContainer.appendChild(item);
    });
}


// Get photos from Unsplah API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
       displayPhotos();
    }
    catch(error)
    {
        console.log("error", error);
    }
}
//Check to see if scrolling near bottom of the page, Load More Photos
window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >=document.body.offsetHeight-1000 && ready==true){
        ready=false;
        getPhotos();
        console.log("load More");
    }
}
)


//On load
getPhotos();