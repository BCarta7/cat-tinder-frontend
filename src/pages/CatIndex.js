import React from 'react'
import { NavLink } from "react-router-dom"
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

const CatIndex = ({cats}) => {
  const showcats = cats?.sort(() => 0.5 - Math.random()).slice(0,3)
  return (
    <main className="allCats">
  {showcats?.map((cat, index) => {
  return (
    <>
    <NavLink to={`/catshow/${cat.id}`} style={{color:"black"}}>
      <Card
      color="warning"
      style={{
        width: '18rem'
      }}
      key={index}
      >      
      <img
        alt="It's the cat"
        src={cat.image}
      />
      <CardBody>
        <CardTitle tag="h5">
          {cat.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {cat.age}
        </CardSubtitle>
      </CardBody>
      </Card>
    </NavLink>
    </>
      )}
    )}
    </main>
)}


export default CatIndex