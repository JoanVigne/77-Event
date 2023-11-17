import { useEffect, useRef, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const timeOutId = useRef(null);

  // trier les data par date
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  const nextCard = () => {
    if (byDateDesc !== undefined) {
      timeOutId.current = setTimeout(
        () => setIndex(index + 1 < byDateDesc.length ? index + 1 : 0),
        5000
      );
    }
  };
  useEffect(() => {
    nextCard();
    return () => {
      clearTimeout(timeOutId.current);
    };
  }, [byDateDesc, index]);

  const handleRadioClick = (e) => {
    clearTimeout(timeOutId.current);
    setIndex(e);
    nextCard();
  };

  return (
    <div className="SlideCardList" key={Math.random()}>
      {byDateDesc?.map((event, idx) => (
        <div key={`${event.title}.${event.date}`}>
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`${_.date}.${_.title}`}
                  type="radio"
                  name="radio-button"
                  defaultChecked={radioIdx === index}
                  // checked={radioIdx === index} // fonctionne en double click pour que le radio soit selectionné, simple click fait seulement le changement de slider

                  onClick={() => handleRadioClick(radioIdx)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
