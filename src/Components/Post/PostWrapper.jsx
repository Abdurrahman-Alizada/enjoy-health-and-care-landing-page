import React from 'react';
import Post from './Post';

const PostWrapper = ({ data }) => {
  // const post = data.slice(0, 3);
  return (
    <section id="blog">
      <div className="container">
        <div className="row" >
          {
            data.map((element, index) => (
              <Post {...element} key={index} />
            ))
          }
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  )
}

export default PostWrapper;
