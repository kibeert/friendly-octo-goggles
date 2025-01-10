

function App(){
  return (
    <>
    <h1>I am a button</h1>
    <MyButton/>;
    <Properties></Properties>
    <listItems></listItems>
    </>
  );
}
export default App 

function MyButton(){
  return(
    <button>Click me</button>
  )
}

const user ={
  name: 'John Doe',
  imageurl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize : 90,
  
};

function Properties(){
  return(
    <>
    <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageurl}
      alt={'photo of'  + user.name}
      style={{
        width:user.imageSize,
        height:user.imageSize,
     }}
     
     />
    </>
  )
}

const products = [
  {title : 'cabbage', id:1},
  {title: 'Garlic', id:2},
  {title: 'Apple', id:3},
]

function listItems(){
  const ListItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  )
}

