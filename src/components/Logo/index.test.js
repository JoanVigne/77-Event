import { render, screen } from "@testing-library/react";
import Logo from ".";

describe("Logo component", () => {
  describe("When a Logo is created with the size small", () => {
    it("the logo height = 35 and width = 101", () => {
      render(<Logo size="small" />);
      expect(screen.getByTestId("logo").getAttribute("width")).toEqual("101");
      expect(screen.getByTestId("logo").getAttribute("height")).toEqual("35");
    });
  });
  describe("When a Logo is created with the size large", () => {
    it("the logo height = 67 and width = 196", () => {
      render(<Logo size="large" />);
      expect(screen.getByTestId("logo").getAttribute("width")).toEqual("196");
      expect(screen.getByTestId("logo").getAttribute("height")).toEqual("67");
    });
  });
  describe("When a Logo is created with WHAT EVER EXCEPT LARGE", () => {
    it("the logo height = 35 and width = 101", () => {
      render(<Logo size="ARANDOMTEXTHERE" />);
      expect(screen.getByTestId("logo").getAttribute("width")).toEqual("101");
      expect(screen.getByTestId("logo").getAttribute("height")).toEqual("35");
    });
  });
});
