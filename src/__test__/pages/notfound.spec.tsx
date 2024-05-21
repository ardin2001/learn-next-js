import NotFound from "@/pages/404";
import { render } from "@testing-library/react";

describe("not found page", () => {
    it("should render correctly", () => {
        expect(render(<NotFound/>)).toMatchSnapshot();
    })
})