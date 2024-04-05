import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Menu } from "."

describe("Menu", () => {
  it("should display menu correctly", () => {
    const {getByText, queryByText} = render(
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
            }
        ]}
      />
    )
    expect(getByText('Furniture')).toBeVisible()
    expect(getByText('Electronics')).toBeVisible()
    expect(queryByText('Kitchen')).not.toBeVisible()
  })
})