import './App.css';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

class state extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "oumaima ben rhouma",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis venenatis diam, ut placerat sapien malesuada eget. In sodales tortor vitae sapien blandit hendrerit. Nullam molestie risus massa. Curabitur felis sem, bibendum placerat nibh sed, tincidunt pharetra nibh. Duis ut enim porttitor, placerat quam a, accumsan erat. Nam eu augue tortor. Pellentesque mattis felis erat, ac tempus est semper a. Sed tempor ligula nunc, id feugiat dolor ornare sit amet. Suspendisse vitae nisl accumsan, finibus nisl et, vestibulum ipsum. Vestibulum ut congue sem, at suscipit mi.",
      profession: "Full Stack web developer student",
      isShown: false,
      imgSrc:'cda2021-van-gogh-sothebys-mercier-montmartre-vente-detail-tt-width-620-height-465-fill-0-crop-0-bgcolor-eeeeee.jpg'
  };
  this.hideProfile = this.hideProfile.bind(this);
  }
  hideProfile() {
    this.setState(state => ({
      isShown: !state.isShown
    }));
}
render (){
  const {fullName, bio, profession, isShown, imgSrc} = this.state;
  return(
  <div className="App">
    <Button variant='dark' onClick={() => this.hideProfile()}>{this.state.isShown ? 'Hide it' : 'Show it'}</Button>
    {isShown && <div className='profile'>
            <h1 className='title'>
                {fullName}
            </h1>
            <img className='image' src={imgSrc} width='400px' height='400px' alt='avatar' style={{padding:'1% 0'}}/>
            <p className="bio">
                {bio}
            </p>
            <p className='profession'>
                {profession}
            </p>
    </div>}

  </div>
  );
}
}

export default state;
