import React, { ChangeEvent, useState } from "react";
import classes from "./App.module.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      "https://cryptic-beach-13205.herokuapp.com/api/short",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: inputValue }),
      }
    );

    const data = await response.json();
    if (data === "Invalid Original Url") {
      setInputValue("");
      return alert("Invalid URL");
    }

    setShortUrl(data.shortUrl);
    setInputValue("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setInputValue("");
    alert("Copied to clipboard " + shortUrl);
  };
  return (
    <>
      <div className={classes["login-box"]}>
        <h2>URL SHORTENER</h2>
        <form onSubmit={handleSubmit} action="POST">
          <div className={classes["user-box"]}>
            <input type="text" onChange={inputHandler} value={inputValue} />
            <label>Enter your long boring url to shorten it 😁</label>
          </div>

          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>

        {shortUrl && (
          <div className={classes["short"]}>
            <p>
              <code>
                Short URL: <a href={shortUrl}>{shortUrl}</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="24"
                  height="24"
                  onClick={copyToClipboard}
                  className={classes["copy"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </code>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
