import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound';
const Gallery = ({ searchQuery }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const fetchMorePhotos = async () => {
    try {
        setLoading(true);
      let apiUrl;
      const YOUR_API_KEY = process.env.REACT_APP_API_KEY;
      if (searchQuery) {
        apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&api_key=${YOUR_API_KEY}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`;
      } else {
        apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&safe_search=1&api_key=${YOUR_API_KEY}&format=json&nojsoncallback=1&content_type=1`;
      }

      const response = await axios.get(apiUrl);
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.photos.photo]);
     
    } catch (error) {
      console.error('Error fetching more photos:', error);
    }
    finally {
        setLoading(false);  
      }
  };

  useEffect(() => {
    const fetchRecentPhotos = async () => {
      try {
        setLoading(true);
        const YOUR_API_KEY = process.env.REACT_APP_API_KEY 
        let apiUrl;
        
        if (searchQuery) {
          apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&api_key=${YOUR_API_KEY}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`;
        }
        else{
            apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&safe_search=1&api_key=${YOUR_API_KEY}&format=json&nojsoncallback=1&content_type=1`;

        }
        const response = await axios.get(apiUrl);
        setPhotos(response.data.photos.photo);
      
      } catch (error) {
        console.error('Error fetching recent photos:', error);
      }
      finally {
       
        setLoading(false); 
      }
    
    };
    setPhotos([]);
  
    fetchRecentPhotos();
  }, [searchQuery]);


  return (
    <div>
      {loading && <Loading />}
        {
            photos.length> 0 ? (
                <InfiniteScroll
        dataLength={photos.length}
        next={fetchMorePhotos}
        hasMore={true} 
        endMessage={<p>No more data to load.</p>}
      >
     

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4 p-2">
          {photos.map((photo, index) => (
  <GalleryItem key={photo.id} photo={photo} onClick={openModal} />
))}

           {selectedPhoto && <Modal photo={selectedPhoto} closeModal={closeModal} />}
        </div>
      </InfiniteScroll> 
    
            ) : (
                <NotFound />
            )
        }
          
        
   </div>
  );
};

export default Gallery;

