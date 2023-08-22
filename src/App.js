import { Button, Form } from 'react-bootstrap';
import {  useRef, useState } from 'react';
import './index.css';
import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY  = 'Z9fx-4KtPqXKm1VMvYENWMgkT5u4H-YSgcW482sIfNU';
const IMAGE_PER_PAGE = 20;
function App() {
  const searchInput = useRef(null);
  const [images,setImages]=useState([]);
  const [page,setPage]=useState([1]);
  const [totalPages,setTotalPages]=useState([0]);


  const fetchImages =async()=>{
    try{
      const {data} = await axios.get(
        `${API_URL}?query=${searchInput.current.value}
        &page=1&per_page=${IMAGE_PER_PAGE}
        &client_id=${API_KEY}`
      );
      setImages(data.results);
      setTotalPages(data.total_pages);

    }catch(error){
      console.log(error)
    }
  };
  
  const handlerSearch =(event)=>{
    event.preventDefault();
    console.log(searchInput.current.value)
    setPage(1);
    fetchImages();
  };
   
  const handleselection = (selection)=>{
    searchInput.current.value = selection
    setPage(1);
    fetchImages();
  };
  
  console.log('page',page)

  return (
    <div className='container'>
      <h1 className='title'>Dynamic Search</h1>
      <div className='search-section'>
      <form onSubmit={handlerSearch}>
      <Form.Control
       className='searc-input'
        type='search'
         placeholder='Type somthing'
         ref={searchInput}
         />
      </form>
      </div>
      <div className='filters'>
        <div onClick={()=>{handleselection('Cars')}}>Cars</div>
        <div onClick={()=>{handleselection('Bikes')}}>Bikes</div>
        <div onClick={()=>{handleselection('Cats')}}>Cats</div>
        <div onClick={()=>{handleselection('Birds')}}>Birds</div>
      </div>
      <div className='images'>
        {images.map((image)=>{
            return(
              <img 
              key={image.id} 
              src={image.urls.small} 
              alt={image.alt_description}
              className='image'
              />
            )  ;
          })}
      </div>
      <div className='buttons'>
         {page > 1 && <Button onClick={()=>setPage(page-1)}>Previous</Button>}
         {page < totalPages && <Button onClick={()=>setPage(Number(page)+1)}>Next</Button>}
      </div>
    </div>  
  );
}

export default App;
