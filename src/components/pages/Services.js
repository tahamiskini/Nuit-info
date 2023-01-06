import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Services() {
  return (
    <div className='cards'>
    <h1>Check out Servcies!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='images/hotel2 (1).jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
          />
          <CardItem
            src='images/hotel2 (2).jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='images/hotel2 (3).jpg'
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='luxury'
            path='/services'
          />
          <CardItem
            src='images/hotel2 (4).jpg'
            text='Experience Football on Top of the Himilayan Mountains'
            label='luxury'
            path='/products'
          />
          <CardItem
            src='images/hotel1.jfif'
            text='Ride through the Sahara Desert on a guided camel tour'
            label='luxury'
            path='/sign-up'
          />
        </ul>
      </div>
    </div>
  </div>  
  );
}
