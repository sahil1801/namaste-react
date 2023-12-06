import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should Search Res List for burger text input", async() => {
    await act(async() => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", {name: "search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "Pizza"}});

    fireEvent.click(searchBtn);

    // screen should load 4 res cards

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurants", async() => {
    await act(async() => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(5);
});