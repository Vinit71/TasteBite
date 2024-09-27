import { render, screen } from "@testing-library/react"
import Card from "../Card";
import { promotedCard } from "../Card";
import MOCK_DATA from "../mocks/cardMockData.json"  //of a promoted card so that i can perform 2 test cases by one mock data
import "@testing-library/jest-dom"

it("Should render the Card with props data",()=>{
    render(<Card resData = {MOCK_DATA}/>);
    const resName = screen.getByText("Kwality Walls F...");

    expect(resName).toBeInTheDocument(); 
}) 

it("Should render Card with Promoted label",()=>{
    const PromotedCardComp = promotedCard(Card)
    render(<PromotedCardComp resData={MOCK_DATA}/>);
    const resName = screen.getByText("Promoted")

    expect(resName).toBeInTheDocument(); 
})