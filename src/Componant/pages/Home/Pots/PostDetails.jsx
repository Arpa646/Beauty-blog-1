import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const PostDetails = () => {
  const param = useParams()
  const id = param.id
  console.log(id)


  const data = useLoaderData()

  console.log('this is data', data)

  const similar = data && data.find(each => each.id == id)
  console.log(similar)
  const { authorPicture, comment, details, thumbnail
    , title, writer
  } = similar



  function submitForm(e) {
    // Retrieve input values
    e.preventDefault()
    const email = document.getElementById('emailInput').value;
    const comment = document.getElementById('commentInput').value;
console.log(email,comment)
    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
      <p>${comment}</p>
      <p>by ${email}</p>
    `;

    // Append the new comment to the comments section
    const commentsSection = document.getElementById('commentsSection');
    commentsSection.appendChild(newComment);

    // Clear the form inputs
    document.getElementById('nameInput').value = '';
    document.getElementById('commentInput').value = '';
  }








  return (
    <div className='details'>
      <div className='container '>

        <div className="row">
          <div>

          </div>


          <div className="title mt-5 container">
            <div>
              <h1>{title}</h1>
            </div>
          </div>

          <div className="col-lg-8 p-5 ">
            <img className='img-fluid img-thum p-5' src={thumbnail} alt="" srcset="" />
            <p className='text-center mt-5 color'><span className='tips'>TIPS</span> Janusary 4,2023   ;  540</p>
            <p className='details '>{details}</p>


            <form className="form" onSubmit={submitForm}>
              <div className='input'>
                <input type="text" id="nameInput" placeholder='Your Name *' />
                <input className='mt-3' type="email" id="emailInput" placeholder='Your Email*' />

              </div>
              <div>
                <textarea placeholder='Your Comment*' id="commentInput" cols="30" rows="10"></textarea>
              </div>
              <h5 className='comment-para'>By this form, you can share your valuable time. With this comment, we can improve our website*</h5>
              <button className='SUBMIT-BTN' onclick="submitForm()">Add Comment</button>
            </form>

          </div>


          <div className="col-lg-4 container-fluid ">
            <h4 className='cate'>____ Category____</h4>
            <div className='category   me-lg-4'>
              <div className='img'>
                <img src="https://glamchic.ancorathemes.com/wp-content/uploads/2018/01/icon-advice.png" alt="" />
                <p>Advice</p>
              </div>
              <div className='img'>
                <img src="https://glamchic.ancorathemes.com/wp-content/uploads/2018/01/icon-bodycare.png" alt="" />
                <p>BODYCARE</p>
              </div>
              <div className='img'>
                <img src="https://glamchic.ancorathemes.com/wp-content/uploads/2018/01/icon-cosmetics.png" alt="" />
                <p>BOSYCARE</p>
              </div>
              <div className='img'>
                <img src="https://glamchic.ancorathemes.com/wp-content/uploads/2018/01/icon-fragrance.png" alt="" />
                <p>COSMETICS</p>

              </div>
              <div className='img'>
                <img src="https://glamchic.ancorathemes.com/wp-content/uploads/2018/01/icon-haircare.png" alt="" />
                <p>HAIRCARE</p>
              </div>
              <div className='img'>
                <img src="https://glamchic.ancorathemes.com/wp-content/uploads/2018/01/icon-skincare.png" alt="" />
                <p>SKINCARE</p>
              </div>
            </div>


            <div>
              <h4 className='cate'>________About Me________
              </h4>
              <img className='n' src="https://glamchic.ancorathemes.com/wp-content/uploads/2017/08/gravatar.png" alt="" />
              <p className='sofia'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut o, rporis amet reprehenderit nisi quos inventore.</p>
              <br />



              <h4 className='cate'>_____Recent Comment_____</h4>
              <div id="commentsSection" className=''>
               
              </div>




            </div>








          </div>

        </div>
      </div>
    </div>
  );
};

export default PostDetails;