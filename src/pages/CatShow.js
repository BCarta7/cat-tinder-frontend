import React from 'react'
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBody,
  Button,
} from 'reactstrap';

const CatShow = ({cats}) => {
  const { id } = useParams()
  let currentCat = cats.find((cat) => cat.id === +id)
  console.log(currentCat)
  return (
    <>
    <main className="one-cat">
      <Card
    color="warning"
    style={{
      width: '30rem'
    }}
  >
    <img
      alt="it's the cat"
      src={currentCat.image}
    />
    <CardBody>
      <CardTitle tag="h5">
        {currentCat.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {currentCat.age}
      </CardSubtitle>
      <CardText>
        {currentCat.enjoys}
      </CardText>
      <NavLink to ={'/catIndex'}>
        <Button>
        Back to the catshow
        </Button>
      </NavLink>
    </CardBody>
  </Card>
  </main>
  </>
  )
}

export default CatShow