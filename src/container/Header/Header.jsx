import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading'
import './Header.css';
import images from '../../constants/images';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:"2rem 0"}}>Sit Tellus Lobortis Sed Senectus Vivamus Molesite. Condimentium Volutpat Morbi Facilisis Quam Scelerisque Spaien, Et, Penatibus Aliquam Amset Tellus</p>
      <button type='button' className="custom__button">Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
