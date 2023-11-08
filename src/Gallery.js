// Gallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = ({ searchQuery }) => {
  const [photos, setPhotos] = useState([]);
console.log(searchQuery,"7")
  useEffect(() => {

//     Key:
// c896eca5ef0199fa856a92658579ad7d

// Secret:
// 548d3438dcedaca3
    const fetchRecentPhotos = async () => {
      try {
        // const response = await axios.get('https://www.flickr.com/services/api/flickr.photos.getRecent.html', {
        //   params: {
        //     api_key: 'c896eca5ef0199fa856a92658579ad7d',
        //     format: 'json',
        //     nojsoncallback: 1,
        //     safe_search: 1 
        //   }
        // });
        // function runSearch(query) {
        //     axios
        //       .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        //       .then(response => {
        //         const { data: { photos: { photo } } } = response
        //         setImages(photo);
        //         setLoading(false);
        //       })
        //       .catch(error => {
        //         console.log("Encountered an error with fetching and parsing data", error);
        //       });
        //   }
        let apiUrl;
        const YOUR_API_KEY= 'c896eca5ef0199fa856a92658579ad7d'
        if (searchQuery) {
            // apiUrl = 'https://www.flickr.com/services/api/flickr.photos.search.html';
            apiUrl=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${YOUR_API_KEY}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`
        //   apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search.html&api_key=${YOUR_API_KEY}&format=json&nojsoncallback=1&safe_search=1`
        } else {
        //   apiUrl =  `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${YOUR_API_KEY}&format=json&nojsoncallback=1&safe_search=1`
        // apiUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.getRecent';
        apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${YOUR_API_KEY}&format=json&nojsoncallback=1&safe_search=1&content_type=1`;

      
        }
        const response = await axios.get( apiUrl
        //     ,
        //       {
        //     params: {
        //       api_key: YOUR_API_KEY,
        //       format: 'json',
        //       nojsoncallback: 1,
        //       safe_search: 1,
        //       text: searchQuery 
        //     }
        //   }
           );
        console.log(response.data)
        setPhotos(response.data.photos.photo);
      } catch (error) {
      
        console.error('Error fetching recent photos:', error);
      }
    };

    fetchRecentPhotos();
  }, [searchQuery]);

  return (
    // <div className="gallery">
    //   {photos.map(photo => (
    //     <img
    //       key={photo.id}
    //       src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
    //       alt={photo.title}
    //     />
    //   ))}
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 p-2">
    {photos.map(photo => (
      <div key={photo.id} className="relative   aspect-w-1   aspect-h-1">
        <img
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
          className="object-cover w-full h-full rounded-lg"
          style={{ maxWidth: '450px', maxHeight: '450px' }}
        />
      </div>
    ))}
  </div>
  


  );
};

export default Gallery;
