import { render } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Post from "./Post"

describe("Post", () => {
    it("fetches the post with the requested id", async ()=> {
        globalThis.fetch = vi.fn()

        vi.mocked(globalThis.fetch).mockResolvedValue({
            json: async () => ({
                id: 2,
                userId: 1,
                title: "Second post", 
                body: "This is the second post",
            }),
        } as Response)

        render(<Post id={2} />)

        await new Promise((resolve) => setTimeout(resolve, 0))
        expect(globalThis.fetch).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/posts/2"
        )
    })
})