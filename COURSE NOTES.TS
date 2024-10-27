/*
--------------------------------------------------------
1)we can pass HTML properties as propes in the component:

ex

component tag in the main app : <Hello name="abdou" age={25}/>

and the use it in the component like this :
const person = {
    name : "abdou",
    age : 25

}

function Hello( {name , age } : Prop) : ReactNode{
  return (
    <>
      <h1>hello {name} my name is {age}</h1>
    </>
  );
}
--------------------------------------------------------

2)we can destructer a prop :

ex : const { name, age } = person;

--------------------------------------------------------
3)we can destruct a prop inside the function :

ex : function Hello( {name , age } : Prop) : ReactNode{
  return (
    <>
      <h1>hello {name} my name is {age}</h1>
    </>
  );
}
  --------------------------------------------------------

11)React For Beginners 11 : Immutability of Props

basically , props cannot be changed after the component is created. can they? :
--------------------------------------------------------






*/
//list me all videos of this link : https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza

// component variables are cool
