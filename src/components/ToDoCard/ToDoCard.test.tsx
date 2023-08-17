import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import ToDo from "../../store/types";
import ToDoCard from "./ToDoCard";

describe("Given a ToDoCard component", () => {
  describe("When it receives a toDo task", () => {
    test("Then it should show de name in the title", () => {
      const toDo: ToDo = {
        id: 1,
        name: "Marius",
        isDone: false,
      };

      const headingTitle = "Marius";

      render(
        <Provider store={store}>
          <ToDoCard todo={toDo} />
        </Provider>,
      );

      const heading = screen.getByRole("heading", {
        name: headingTitle,
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
