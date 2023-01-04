import { render } from "@testing-library/react"
import CatShow from "./CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats"

describe("<CatShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>,
     div)
  })
})