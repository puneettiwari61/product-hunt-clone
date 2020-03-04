import React from 'react';
import Makers from './Makers'

var arr = []
arr.length = 12
arr.fill(5)
export default function Aside() {

  return (
    <>
      <div className='aside'>
      <p className='today-para'>Makers working today</p>
        <div className='white'>
          <div className='white aside-makers'>
            {arr.map(a => <Makers />)}
          </div>
          <hr />
          <p className='work-para'>Start Working Now</p>
        </div>
        <p className='radio-para'>Product Hunt Radio</p>
        <div className="radio-div">
        <p className="radio-text">How to grow and monetize communities with Jill Salzman</p>
        <div class="cover_37fb2"><svg width="35" height="45" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" className="playIcon_465b6"><g fill="none" fillRule="evenodd"><path d="M17.5 35C27.165 35 35 27.165 35 17.5S27.165 0 17.5 0 0 7.835 0 17.5 7.835 35 17.5 35zm-3.71-24.57a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill="#FFF"></path><path d="M13.79 10.43a.906.906 0 0 0-.444.116.925.925 0 0 0-.47.807l-.015 12.892a.923.923 0 0 0 .918.924.918.918 0 0 0 .483-.14L24.8 18.58a.928.928 0 0 0 .001-1.57l-10.526-6.44a.895.895 0 0 0-.483-.14h-.002z" fill-opacity=".8" fill="#545656"></path></g></svg></div>
        </div>
        <p className='radio-para'>Newsletter</p>
        <div className="news">
        <div>
        <div class="newsletter-div"></div>
        <h2 className='head-news'>Remote teams, this is for you </h2>
        <hr className="hr2" />
        <p className='radio-para news-para'>Get the best new products in your inbox, every day <span role='img'>👇</span></p>
        <div className="news-button-div">
        <button className="news-button">Subscribe</button>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
