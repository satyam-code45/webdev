import { useState } from "react";

export function LightBulb() {
  const [onoff, setonoff] = useState(true);
  return (
    <div>
      <Bulb onoff={onoff} />
      <Button onoff={onoff} setonoff={setonoff} />
    </div>
  );
}
function Bulb({ onoff }) {
  return (
    <div>
      <div>
        {onoff ? (
          <img src="https://cdn.pixabay.com/photo/2014/10/26/14/36/light-bulb-503881_640.jpg" />
        ) : (
          <img src="https://cdn.pixabay.com/photo/2016/02/01/20/26/light-bulb-1174363_640.png" />
        )}
      </div>
    </div>
  );
}
function Button({ onoff, setonoff }) {
  function toggle() {
    setonoff((onoff) => !onoff);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
