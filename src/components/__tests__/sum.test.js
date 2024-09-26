import sum from "../sum";

test("My first test case", ()=>{
    const result = sum(2,3);

    //Assertion
    expect(result).toBe(5);
})