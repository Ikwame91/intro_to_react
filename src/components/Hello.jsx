const name = "John Doe";

// function displayMessage() {
//   return "Wow!!";
// }

function Hello({ name, message, emoji, seatNumbers, person/*props*/ }) {
  //   const { name, message } = props;
  return (
    <div>
      <h1>
        {message} {emoji} {name} {seatNumbers}
      </h1>
      <h2> </h2>
    </div>
  );
}

export default Hello;
