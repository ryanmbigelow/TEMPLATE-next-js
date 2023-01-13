import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
import { useState } from 'react';
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  // const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div>
      <>
        <h1>Hello {user.displayName}! </h1>
      </>
      <>
        <h1>Counter Title</h1>
        <h2>{value}</h2>
        <Button type="button" onClick={handleClick}>Increment</Button>
        <Button type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</Button>
        <Button type="button" onClick={() => setValue(0)}>Reset</Button>
      </>
    </div>
  );
}

export default Home;
