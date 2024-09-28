import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CardsSection from "../CardsSection.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should test the search functionality", async () => {
  render(
    <BrowserRouter>
      <CardsSection />
    </BrowserRouter>
  );

  await waitFor(() => {
    //doing this becouse i have setTimeout() in <CardsSection>
    const cardsBefore = screen.getAllByTestId("testCard");
    expect(cardsBefore.length).toBe(16);
  });

  //as we already waited now we dont need wairFor() again and agian

  //Replication Search functionality
  const searchBtn = screen.getByRole("button", { name: "Search" }); //1. get button
  const searchInput = screen.getByTestId("inputSearch"); //2. get input

  fireEvent.change(searchInput, { target: { value: "pizza" } }); //3. giving input
  fireEvent.click(searchBtn); //4. clicking the button with input

  const cardsAfter = screen.getAllByTestId("testCard");
  //assert --> screen should load 3 cards (of pizza)
  expect(cardsAfter.length).toBe(3);
});

it("Should test the top-rated-button",async () => {
  render(
    <BrowserRouter>
      <CardsSection />
    </BrowserRouter>
  );

  await waitFor(()=>{
    const cardsBefore = screen.getAllByTestId("testCard");
    expect(cardsBefore.length).toBe(16);
  })

  const topRatedBtn = screen.getByRole("button", {name: "Top Rated Resturents"}); //get button
  fireEvent.click(topRatedBtn); //click the button

  const cardsAfter = screen.getAllByTestId("testCard");
  expect(cardsAfter.length).toBe(5);
});
