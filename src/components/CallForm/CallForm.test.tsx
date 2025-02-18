import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockAxios } from "../../setupTests";
import CallForm from "./CallForm";

describe("<CallForm />", () => {
  beforeEach(() => {
    mockAxios.onPost("/email").reply(200);
  });

  it("calls the /email endpoint with the title and description on submit", () => {
    render(<CallForm />);

    const callTitleInput = screen.getByLabelText(/call title/i);
    const callDescriptionInput = screen.getByLabelText(/call description/i);
    const generateEmailButton = screen.getByRole("button", {
      name: /generate email/i,
    });

    userEvent.type(callTitleInput, "Quick catch up");
    userEvent.type(
      callDescriptionInput,
      "Let's catch up to discuss the project."
    );
    userEvent.click(generateEmailButton);

    expect(mockAxios.history.post.length).toBe(1);
    expect(mockAxios.history.post[0].data).toBe(
      JSON.stringify({
        title: "Quick catch up",
        description: "Let's catch up to discuss the project.",
      })
    );
  });
});
