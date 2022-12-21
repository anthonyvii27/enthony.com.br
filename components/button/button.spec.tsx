import { Button } from "@components/button/index";
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";

describe("validating the core of the button", () => {
    it("should have the content as Register", () => {
        render(<Button />);
        expect(screen.getByText("Register")).toBeInTheDocument();
    });
});
