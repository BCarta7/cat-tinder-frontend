import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats"
import CatEdit from "./CatEdit.js"

describe("<CatEdit />", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/catedit/1"]}>
            <Routes>
              <Route path="catedit/:id" element={<CatEdit cats={mockCats} />} />
            </Routes>
          </MemoryRouter>,
        )
    })
  it("renders without crashing", () => {})
  it("renders a form for the user", () => {
    const formName = screen.getByText("Name")
    expect(formName.getAttribute("For")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("For")).toEqual("age")

    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("For")).toEqual("enjoys")

    const formImage = screen.getByText("Image URL")
    expect(formImage.getAttribute("For")).toEqual("image")
  })
})