import React, { useEffect } from 'react';
import  './Banner.css'
import Navbar from '../../shared/Navbar/Navbar';




//https://nov-karl-5.myshopify.com/cdn/shop/files/s-2_2048x.jpg?v=1621561996
const Banner = () => {
    useEffect(() => {
        fetch('Post.json')
          .then(res => res.json())
          .then(data => console.log('jiiiii',data));
      },[]);
    return (
       <div className='banner-outer pt-4 '>
         <div class="card inner-banner2  bg-black container border-0">
        <img src="https://nov-karl-5.myshopify.com/cdn/shop/files/s-1_2048x.jpg?v=1621561995" class="card-img" alt="..."/>
        <div class="card-img-overlay inner-banner ">
          <h1 class="card-title ">Card title</h1>
          <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        
        </div>
      </div>
       </div>


    );
};

export default Banner;
