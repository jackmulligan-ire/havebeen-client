import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockAxios } from "../../setupTests";
import CallForm from "./CallForm";

describe("<CallForm />", () => {
  beforeEach(() => {
    mockAxios.onPost("/email").reply(200, {
      title: "Report sync call",
      body: "Hi team,\n\nLet's sync up to discuss the report.\n\nThanks!",
    });
  });

  it("calls the /email endpoint with the title and description on submit", () => {
    const mockTitle = "Quick catch up";
    const mockDescription = "Let's catch up to discuss the project.";

    render(<CallForm setEmail={jest.fn()} />);

    const callTitleInput = screen.getByLabelText(/call title/i);
    const callDescriptionInput = screen.getByLabelText(/call description/i);
    const generateEmailButton = screen.getByRole("button", {
      name: /create email/i,
    });

    userEvent.type(callTitleInput, mockTitle);
    userEvent.type(callDescriptionInput, mockDescription);
    userEvent.click(generateEmailButton);

    expect(mockAxios.history.post.length).toBe(1);
    expect(mockAxios.history.post[0].data).toBe(
      JSON.stringify({
        title: mockTitle,
        description: mockDescription,
      })
    );
  });

  it("calls the email setters with the returned email title and body", async () => {
    const mockSetEmail = jest.fn();
    render(<CallForm setEmail={mockSetEmail} />);

    const callTitleInput = screen.getByLabelText(/call title/i);
    const callDescriptionInput = screen.getByLabelText(/call description/i);
    const generateEmailButton = screen.getByRole("button", {
      name: /create email/i,
    });

    userEvent.type(callTitleInput, "Quick catch up");
    userEvent.type(
      callDescriptionInput,
      "Let's sync up to discuss the project"
    );
    userEvent.click(generateEmailButton);

    await waitFor(() => {
      expect(mockSetEmail).toHaveBeenCalledWith({
        title: "Report sync call",
        body: "Hi team,\n\nLet's sync up to discuss the report.\n\nThanks!",
      });
    });
  });
});
