import React from 'react'
import leftcat from '../assets/leftcat.jpeg'
import rightcat from '../assets/rightcat.jpeg'
import { NavLink } from "reactstrap"

const Home = () => {
  return (
    <>
    <div className="homePage">
    <h1 className="homeTitle">Welcome to cat tinder!</h1>
    <div className="homeBanner">
      <div>
        <img className="homeImage" src={leftcat} alt="kitty" />
      </div>
      <div className="homeText">
        <h3>Hunting for cougars? Interested in cats with tats? Or just looking for your next littermate? Sign up with Cat Tinder, and join hundreds of lonely kitties looking to share their meowmix, maybe even with you! (Must be a cat to join, terms and conditions apply.) </h3>
        <NavLink className="homeLink" href="/catNew">
            Add your cat self to the list
        </NavLink>
      </div>
      <div>
        <img className="homeImage" src={rightcat} alt="kitty" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Home