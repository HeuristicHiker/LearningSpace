import { render, cleanup } from '@testing-library/react'
import { expect, test, afterEach } from 'vitest'
import Pizza from '../Pizza'

afterEach(cleanup)

test('alt test renders on Pizza image', async () => {
    const name = "My favorite pizza"
    const src = "https://picsum.photos/200"
    const screen = render(
        <Pizza name={name} image={src} />
    )

    const img = screen.getByRole('img')
    expect(img.src).toBe(src)
    expect(img.alt).toBe(name)
})

test("to have default image if non is provided", async () => {
    const name = "My favorite pizza"
    const screen = render(
        <Pizza name={name} description="A delicious pizza" />
    )

    const img = screen.getByRole('img')
    expect(img.src).toBe("https://picsum.photos/200")
})