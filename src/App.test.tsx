import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const result = render(<App />);

    expect(result).toBeTruthy();
  });
});
