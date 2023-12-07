test("a string matching patterns",()=>{
    expect('team').not.toMatch(/I/);
})

test("a string matvhing patterns",()=>{
    expect('christopher').toMatch(/stop/);
})

const questionsCount = [
    'A tricky Peanut',
    'A spooky choo choo',
    'A horror shinchan',
    'A submarine',
    'An evil pikachu'
]

test(" the sppoky game counts ",()=>{
    expect(questionsCount).toContain('A submarine')
})

// Exceptions handling
