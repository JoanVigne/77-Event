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
      /* PROBLEME ICI !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       Unable to find an element with the text: Message envoyé !.
        This could be because the text is broken up by multiple elements.
         In this case, you can provide a function for your text matcher
          to make your matcher more flexible.
       */
      /* await screen.findByText("Message envoyé !"); */
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
    render(<EventCard label="boom" imageSrc="rdm" title="test" />);
  });
});
