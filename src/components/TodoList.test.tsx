import {render, screen} from '@testing-library/react'
import {describe, it, expect, vi} from 'vitest'
import userEvent from '@testing-library/user-event'
import TodoList from './TodoList'
import type {Todo} from '../types'

describe('TodoList', () => {
    it('renders the correct number of todos', async() => {
        const user = userEvent.setup()

        const todos: Todo[] = [
            { id: 1, text: 'Handla', completed: false },
            {id: 2, text: 'Städa', completed: false },

        ]

        const onToggle = vi.fn()
        const onDelete = vi.fn()

        render(
            <TodoList
            todos={todos}
            onToggle={onToggle}
            onDelete={onDelete}
            />,
        )

        await user.click(screen.getByText('Städa'))

        expect(onToggle).toHaveBeenCalledWith(2)
    })
})