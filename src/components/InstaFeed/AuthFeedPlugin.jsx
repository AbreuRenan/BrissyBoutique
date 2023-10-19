import React from "react";
import { useSearchParams } from "react-router-dom";

function AuthFeedPlugin() {
  const [params, setParams] = useSearchParams();
  const [code, setCode] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState(null);

  React.useEffect(() => {
    const authCode = params.get("code") || false;
    setCode(authCode);
  }, [params]);

  async function exchangeForToken(authCode) {
    let url = "https://api.instagram.com/oauth/access_token";
    const params = new FormData();
    params.append("client_id", import.meta.env.VITE_REACT_FEED_APP_ID);
    params.append("client_secret", import.meta.env.VITE_REACT_FEED_APP_SECRET);
    params.append("grant_type", "authorization_code");
    params.append(
      "redirect_uri",
      import.meta.env.VITE_REACT_FEED_APP_REDIRECT_URI
    );
    params.append("code", authCode);

    const fetch_response = await fetch(url, {
      method: "POST",

      body: params,
    })
      .then((response) => response.text())
      .catch((error) => error);
    return fetch_response;
  }

  function openAuthWindow() {
    const url = "https://api.instagram.com/oauth/authorize";
    const params = new URLSearchParams();
    params.append("client_id", import.meta.env.VITE_REACT_FEED_APP_ID);
    params.append(
      "redirect_uri",
      import.meta.env.VITE_REACT_FEED_APP_REDIRECT_URI
    );
    params.append("scope", "user_profile,user_media");
    params.append("response_type", "code");

    fetch(url, {
      method: "GET",
      body: params,
    });
  }

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
            width="400px"
          ></textarea>
        )}
        {accessToken && (
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
              color: "red",
            }}
            value={accessToken}
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
          onClick={exchangeForToken}
          style={{
            padding: "1rem 2rem",
            borderRadius: "4px",
          }}
        >
          Get Access Token
        </button>
      </div>
    </>
  );
}

export default AuthFeedPlugin;
