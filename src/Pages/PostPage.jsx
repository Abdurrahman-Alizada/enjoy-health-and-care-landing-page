import React from 'react'
import MultiplePageHeading from '../Components/Hero/MultiplePageHeading'
import PostWrapper from '../Components/Post/PostWrapper'
import postPageData from '../utils/data/postPageData.json';

const heroData = {
  bgImg: `/images/hero-bg14.jpg`,
  title: `Our Latest News`,
  subTitle: `Gate all update news here`
}

const PostPage = () => {
  return (
    <div className='marginTop'>
      <MultiplePageHeading {...heroData} />
      <PostWrapper data={postPageData} />
    </div>
  )
}

export default PostPage
