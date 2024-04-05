import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Menu } from "."

describe("Menu", () => {

  const renderMenuWithItems = () => render(
    <Menu
      model={[
          {
            label: 'Furniture',
            items: [
                [
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                    }
                ]
            ]
          },
          {
            label: 'Electronics',
            url: 'https://walcron.com'
          }
      ]}
    />
  )

  it("should display main menu correctly", () => {
    const {getByText, queryByText} = renderMenuWithItems()
    expect(getByText('Furniture')).toBeVisible()
    expect(getByText('Electronics')).toBeVisible()
    expect(queryByText('Kitchen')).not.toBeVisible()
  })

  it("should display sub menu correctly when main menu is clicked", async () => {
    const {getByText} = renderMenuWithItems()
    
    await userEvent.click(getByText('Furniture'))
    expect(getByText('Kitchen')).toBeVisible()
  })

  it("should contains url", async () => {
    const {getByText} = renderMenuWithItems()
    
    expect(getByText('Electronics').parentNode).toHaveAttribute("href", "https://walcron.com")
  })

  it("should contain a mobile button", async () => {
    const {getByRole} = renderMenuWithItems()
    
    expect(getByRole('button', {name: "Navigation"})).toBeVisible()
  })
})