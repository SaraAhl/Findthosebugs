import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoApp from "./TodoApp"

describe("TodoApp filter", () => {
    it("shows only completed todos", async () => {
        const user = userEvent.setup()
        render(<TodoApp />)

        // Arrange
        await user.type(screen.getByLabelText("Ny uppgift"), "Handla")
        await user.click(screen.getByRole("button", {name: "Lägg till"}))

        await user.type(screen.getByLabelText("Ny uppgift"), "Städa")
        await user.click(screen.getByRole("button", {name: "Lägg till"}))

        // Act
        const checkboxes = screen.getAllByRole("checkbox")
        await user.click(checkboxes[1]) 

        await user.click(screen.getByRole("button", {name: "Klara"}))
        

        // Assert
        expect(screen.getByText("Städa")).toBeInTheDocument()

    })
})