const magicyr = require('./Ques5')

test("checking magic year",()=>{
    expect(magicyr(2013)).toBe(2014);
})

// Common matchers

test("checking magic year",()=>{
    expect(magicyr(2013)).toEqual(2014);
})
test("checking magic year",()=>{
    expect(magicyr(2013)).not.toBeNull();
})
test("checking magic year",()=>{
    expect(magicyr(2013)).toBeDefined();
})
test("checking magic year",()=>{
    expect(magicyr(2013)).toBeTruthy();
})