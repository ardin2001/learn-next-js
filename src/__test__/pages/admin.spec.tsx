import Admin from "@/pages/admins";
import { render } from "@testing-library/react";

describe("about page", () => {
    it("should render correctly", () => {
        expect(render(<Admin/>)).toMatchSnapshot();
    })
})