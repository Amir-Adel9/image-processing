const myFunc = (num: number): number => {
  return num * num;
};

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});
