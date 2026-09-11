import {render, screen} from '@testing-library/react'
import {describe, it, expect} from 'vitest' 
import TodoStats from './TodoStats'
import type {Todo} from '../types'

describe('TodoStats', () => {
    it('renders the correct number of completed and total todos', () => {
        const todos: Todo[] = [
            { id: 1, text: 'Handla', completed: false },
            {id: 2, text: 'Städa', completed: true },
            {id: 3, text: 'Diska', completed: false },
        ]

        render(<TodoStats todos={todos} />)

        expect(screen.getByText('2 kvar av 3')).toBeInTheDocument()
    })
})