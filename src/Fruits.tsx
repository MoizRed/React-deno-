import Fruit from "./Fruit.tsx";

export type Fruit_type = {
  readonly  id? : number,
  name: string;
  price: number;
  emoji: string;
};

export default function Fruits( ) {
  const fruits : Fruit_type[] = [
    {
      id: 1,
      name: "Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      id: 2,
      name: "Banana",
      price: 5,
      emoji: "🍌",
    },
    {
      id: 3,
      name: "Orange",
      price: 7,
      emoji: "🍊",
    },

    {
      id: 4,
      name: "Grapes",
      price: 8,
      emoji: "🍇",
    },
  ];

  return (
    <>
      <ol>

    {

      fruits.map(fruit=><li key={fruit.name}> {fruit.name} {fruit.emoji}  :  {fruit.price} $ </li>)
    }
      </ol>
    </>
  );
}



