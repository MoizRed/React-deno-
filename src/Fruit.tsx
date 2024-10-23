import type { Fruit_type } from "./Fruits.tsx";
export default function fruit({ name, price, emoji }: Fruit_type) {

    
  return (
    <>
      <li>{name} {price} {emoji}</li>
    </>
  );
}
