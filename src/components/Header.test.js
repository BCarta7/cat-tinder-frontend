import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("See all cats"))
    expect(screen.getByText("See all cats")).toBeInTheDocument()
    userEvent.click(screen.getByText("See one particularly nice cat"))
    expect(screen.getByText("See one particularly nice cat")).toBeInTheDocument()
    userEvent.click(screen.getByText("Add your cat self to the list"))
    expect(screen.getByText("Add your cat self to the list")).toBeInTheDocument()
    userEvent.click(screen.getByText("Update you cat profile"))
    expect(screen.getByText("Update you cat profile")).toBeInTheDocument()
  })
})