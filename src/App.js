import "./style.css";
import { useState } from "react";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      You have clicked this button {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const isLoggedIn = false;
  let content;
  if (isLoggedIn) {
    content = <MyButton count={count} onClick={handleClick} />;
  } else {
    content = <Profile />;
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      {content}
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
