import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Cart from '../Cart'

test("snapshot", () => {
    const { asFragment } = render(<Cart cart={[]} />)
    expect(asFragment()).toMatchSnapshot()
})

test("contract", () => {
    expect({
        id: "calabrese",
        name: "The Calabrese Pizza",
        category: "Supreme",
        description:
          "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
        image: "/public/pizzas/calabrese.webp",
        sizes: { S: 12.25, M: 16.25, L: 20.25 },
    }).toMatchSnapshot()
})