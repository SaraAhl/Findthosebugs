import {render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {describe, it , expect, vi } from "vitest"
import TodoForm from "./TodoForm"

describe("TodoForm", () => {
    it("does not add an empty todo", async () => {
        const onAdd = vi.fn()

        const user = userEvent.setup()
        render(<TodoForm onAdd={onAdd} />)

        await user.click(screen.getByRole("button", {name: "Lägg till"}))

        expect(onAdd).not.toHaveBeenCalled()
        

    })
})