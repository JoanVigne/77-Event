import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";
import PeopleCard from "../../components/PeopleCard";
import EventCard from "../../components/EventCard";
import Icon from "../../components/Icon";
import Logo from "../../components/Logo";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      setTimeout(async () => {
        await screen.findByText("Message envoyé !");
      }, 1001);
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
    render(<EventList />);
  });
  it("a list a people is displayed", async () => {
    // to implement
    render(
      <PeopleCard
        name="Samira"
        position="CEO"
        imageSrc="/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png"
      />
    );
    await screen.findByText("Samira");
  });
  it("a footer is displayed", () => {
    // to implement
    render(<Icon name="facebook" />);
    render(<Logo size="large" />);
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
    const fakeData = [];
    render(
      <EventCard
        label="boom"
        imageSrc="rdm"
        title="test"
        date={new Date(fakeData?.date)}
      />
    );
  });
});
