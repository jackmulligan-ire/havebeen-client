import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Email from "./Email";

describe("<Email />", () => {
  describe("<EmailClearButton />", () => {
    it("should clear the email when clicked", () => {
      const mockSetShowEmail = jest.fn();

      render(
        <Email
          email={{ title: "title", body: "body" }}
          setEmail={mockSetShowEmail}
        />
      );

      const clearButton = screen.getByRole("button", { name: /Clear Email/i });
      userEvent.click(clearButton);

      expect(mockSetShowEmail).toHaveBeenCalledWith(null);
    });
  });
});
