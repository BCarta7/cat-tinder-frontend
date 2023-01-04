import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatNew from "./CatNew"

describe("<CatNew />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>,
         div)
  })
})