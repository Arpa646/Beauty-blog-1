import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './post.css';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Post = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('Post.json')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  const sliceDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.slice(0, maxLength) + '............';
    }
  };
  return (
    
                <div className='n'>
                  
    <div className='layout mt-5 container' id='portfolio'>
     <h3 className='text-center cc'>______Popular Post______</h3>
      <div className='mt-5 post'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {posts?.map((post, index) => (
            <SwiperSlide key={index} className='slide'>
              <div className='row slide-deisgn'>
                <div className="col-lg-6">
                  <img className='img-fluid' src={post.thumbnail} alt="" srcSet="" />
                </div>
                <div className="col-lg-5 post-right">
                  <div>
                    <h3>{post.title} {post.id}</h3>
                    <div>
                      <p>{sliceDescription(post.details, 200)}</p>
                    </div>
                    <div className='mt-3'>

                      <Link to={`/details/${post.id}`}> <button className='btn1 ' >Read More</button></Link>

                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
                </div>
  );
};

export default Post;
