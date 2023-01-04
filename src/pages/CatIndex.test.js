import { render } from "@testing-library/react"
import CatIndex from "./CatIndex"
import mockCats from "../mockCats"

describe("<CatIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<CatIndex />, div)
  })
})