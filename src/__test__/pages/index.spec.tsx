import Index from "@/pages";
import { render } from "@testing-library/react";

describe("index page", () => {
    it("should render correctly", () => {
        expect(render(<Index/>)).toMatchSnapshot();
    })
})