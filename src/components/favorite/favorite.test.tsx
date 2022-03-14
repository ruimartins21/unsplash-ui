import { render, cleanup } from "@testing-library/react";
import Favorite from ".";
import { photoMock } from "../../mock";

afterEach(cleanup);

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

describe("<Favorite />", () => {
  it("Favorite button present Unlike text", () => {
    const { getByTestId } = render(<Favorite item={photoMock} />);
    const button = getByTestId("fav-btn");

    expect(button).toHaveTextContent("Unlike");
  });

  it("Favorite button present Like text", () => {
    const { getByTestId } = render(
      <Favorite item={{ ...photoMock, favorite: false }} />
    );
    const button = getByTestId("fav-btn");

    expect(button).toHaveTextContent("Like");
  });
});
