const element = <div>Hello</div>;

// @ts-expect-error React's JSX element is not assignable to a number.
const value: number = element;

console.log(value);
