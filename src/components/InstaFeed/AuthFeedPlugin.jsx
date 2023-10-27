import React from "react";
import { useSearchParams } from "react-router-dom";
const port = import.meta.env.VITE_PORT;

function AuthFeedPlugin() {
  const [params, setParams] = useSearchParams();
  const [code, setCode] = React.useState(false);
  const [copyArea, setCopyArea] = React.useState();

  React.useEffect(() => {
    const authCode = params.get("code") || false;
    setCode(authCode);
  }, [params]);

  // React.useEffect(() => {
  //   if (code) {
  //     const response = fetch(`http://localhost:${port}/auth?code=${code}`)
  //       .then((r) => r.json())
  //       .then((json) => json)
  //       .catch((error) => error.message);
  //     console.log(response);
  //   }
  // }, [code]);

  function openAuthWindow() {
    let url = "https://api.instagram.com/oauth/authorize?";
    const params = new URLSearchParams();
    params.append("client_id", import.meta.env.VITE_REACT_FEED_APP_ID);
    params.append(
      "redirect_uri",
      import.meta.env.VITE_REACT_FEED_APP_REDIRECT_URI
    );
    params.append("scope", "user_profile,user_media");
    params.append("response_type", "code");
    url += params.toString();
    window.open(url);
  }

  async function sendAuthCode() {
    const response = await fetch(`http://localhost:${port}/auth?code=${code}`);
    const json = await response.json();
    console.log(json);
    setCopyArea("");
  }

  function handleChange({ target }) {
    setCopyArea(target.value);
  }
  function handleChange2() {}
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {code && (
          <textarea
            style={{
              display: "inline-block",
              fontSize: "12px",
              width: "400px",
              height: "120px",
              padding: "5px",
              border: "1px solid #999",
              whiteSpace: "wrap",
              resize: "none",
            }}
            value={code}
            onChange={handleChange2}
            width="400px"
          ></textarea>
        )}
      </div>
      <div
        style={{
          display: "flex",
          margin: "2rem",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={openAuthWindow}
          style={{
            padding: "1rem 2rem",
            borderRadius: "4px",
          }}
        >
          Autorizar
        </button>
        <button
          onClick={sendAuthCode}
          style={{
            padding: "1rem 2rem",
            borderRadius: "4px",
          }}
        >
          Autorizar
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {code && (
          <textarea
            style={{
              display: "inline-block",
              fontSize: "12px",
              width: "400px",
              height: "120px",
              padding: "5px",
              border: "1px solid #999",
              whiteSpace: "wrap",
              resize: "none",
            }}
            value={copyArea}
            onChange={handleChange}
            width="400px"
          ></textarea>
        )}
      </div>
    </>
  );
}

export default AuthFeedPlugin;
