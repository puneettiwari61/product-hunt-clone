import React from 'react';

export default function Navbar() {
  return (
    <>
     <div className="navbar flex">
     <div>
     <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg></div>  
     <div className='search-div'>
     <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z" fill="#BBB" fillRule="evenodd"></path></svg>
     <input className="search-input" placeholder="Discover your next favourite thing......." />
     </div>
     <div>
     <span className="nav-links">Deals</span> 
     <span className="nav-links">Jobs</span>
     <span className="nav-links">Makers</span>
     <span className="nav-links">Radio</span>
     <span className="nav-links">Ship</span>
     <span className="nav-links">...</span>
     </div>
     <div className='flex nav-last'>
     <span className="nav-links">Post</span>
     <div className="svg"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.14 8.16c.157.192.216.53.097.84-.225.6-.674 1-1.167 1-.494 0-.943-.4-1.212-1a.88.88 0 0 1 .116-.84H1.42c-.406 0-.766-.274-.901-.683-.045-.09 0-.272.09-.363l.18-.228A5.382 5.382 0 0 0 1.87 3.614v-.455c0-1.863 1.622-3.363 3.513-3.136 1.622.182 2.793 1.636 2.793 3.273v.318c0 1.182.36 2.318 1.081 3.272l.18.228c.045.09.09.227.045.363a.87.87 0 0 1-.855.682H6.14z" fill="#FFF"></path></svg></div>
     <div className='my-image'><img className="userImageContainer_5888f" src="https://ph-avatars.imgix.net/2420758/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=40&amp;h=40&amp;fit=crop" alt="Puneet Tiwari" srcSet="https://ph-avatars.imgix.net/2420758/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=40&amp;h=40&amp;fit=crop&amp;dpr=2 2x, https://ph-avatars.imgix.net/2420758/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=40&amp;h=40&amp;fit=crop&amp;dpr=3 3x" style={{width:"40px",height:"40px"}} /></div>
     </div>
     </div>
    </>
  );
}
