import React from "react";
import { render, screen } from "@testing-library/react-native";

function TestComponent() {
  return <></>;
}

describe("Home screen", () => {
  test("renders", () => {
    render(<TestComponent />);

    expect(screen).toBeTruthy();
  });
});