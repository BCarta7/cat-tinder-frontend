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

const CatShow = ({cats, deleteCat}) => {
  const { id } = useParams()
  let currentCat = cats.find((cat) => cat.id === +id)
  console.log(currentCat)
  let deleteMe = () => 
    deleteCat(id)

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
        <div className="cardButtons">
        <NavLink to ={'/catIndex'}>
          <Button>
            Back to the catshow
          </Button>
        </NavLink>
          <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
            <Button>Edit Cat Profile</Button>
          </NavLink>
          <NavLink to="/catindex">
            <Button onClick={deleteMe}>Delete Cat Profile</Button>
          </NavLink>
          </div>
      </CardBody>
      </Card>
    </main>
    </>
  )
}

export default CatShow