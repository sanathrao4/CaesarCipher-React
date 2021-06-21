import React from "react";

const Caesar = () => {
  const [cipherText, setCipherText] = React.useState();
  const [plainText, setPlainText] = React.useState("");
  const [cipherKey, setCipherKey] = React.useState();

  let character = "";
  let ordinal = 0;
  let charNum = 0;
  let cipherMsg = "";

  const handleSubmit = (msg, secretKey) => {
    if (msg === "") {
      alert("Enter Text in Plain Text");
    }
    if (isNaN(secretKey)) {
      alert("Enter a number for key");
    }
    const temp = findCipherText(msg, secretKey);
    setCipherText(temp);
  };

  function findCipherText(msg, secretKey) {
    for (let i in msg) {
      character = msg[i];
      ordinal = character.charCodeAt();
      charNum = ordinal + parseInt(secretKey);
      if (isUpperCase(character)) {
        charNum = ((charNum - 65) % 26) + 65;
        cipherMsg += String.fromCharCode(charNum);
      } else {
        charNum = ((charNum - 97) % 26) + 97;
        cipherMsg += String.fromCharCode(charNum);
      }
    }
    return cipherMsg;
  }
  function isUpperCase(str) {
    return str === str.toUpperCase();
  }

  return (
    <>
      <article>
        <form className="form">
          <h3> Caesar Cipher Problem</h3>
          <div className="form-control">
            <label htmlFor="">Plain text</label>
            <input
              type="text"
              id="plainText"
              name="plainText"
              placeholder="Enter Plain Text"
              value={plainText}
              onChange={(e) => {
                setPlainText(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Cipher Key</label>
            <input
              type="number"
              id="cipherKey"
              placeholder="Enter a key number "
              name="cipherKey"
              value={cipherKey}
              onChange={(e) => {
                setCipherKey(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="btn"
            onClick={(e) => handleSubmit(plainText, cipherKey)}
          >
            Encrypt
          </button>
          <br />
          <div className="form-control">
            <label htmlFor="">Cipher Text</label>
            <input type="text" value={cipherText} readOnly />
          </div>
        </form>
      </article>
    </>
  );
};

export default Caesar;
