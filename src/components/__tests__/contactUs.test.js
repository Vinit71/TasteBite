import {render, screen} from "@testing-library/react"
import Contact from "../Contact.js"
import '@testing-library/jest-dom';

describe('Some test cases for Contact us', ()=>{
    //test 1
    test("Contact us Component should render",()=>{
        render(<Contact />) //try to render component on 'jsdom'
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toHaveTextContent("Contact Us");    //case sensitive
    })
    
    //test 2
    it("check paragraph tags", ()=>{
        render(<Contact />)
        const paragraph = screen.getByText("We'd love to hear from you! Please fill out the form below or reach us via the information provided.");
        expect(paragraph).toBeInTheDocument();
    })
    
    //test 3
    test("check 3 input boxes", ()=>{
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(3);
        // console.log(inputBoxes.length);
    })

})