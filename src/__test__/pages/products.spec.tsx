import Products from "@/pages/products";
import { render } from "@testing-library/react";

describe("about page", () => {
    it("should render correctly", () => {
        expect(render(<Products/>)).toMatchSnapshot();
    })
})