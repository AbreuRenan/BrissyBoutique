import React from "react";
import useMedia from "../CustomHooks/useMedia";
import InstaPost from "./InstaPost";
import "./InstaPost.css";

const TOKEN = import.meta.env.VITE_REACT_APP_FEED_PLUGIN_ACCESS_TOKEN;

function ReactFeedPlugin() {
  const [instagramData, setInstagramData] = React.useState([]);
  const mobileState = useMedia("(max-width: 40rem)");
  const numberOfPhotos = mobileState ? 3 : 6;

  React.useEffect(() => {
    async function getInstaFeed(access_token) {
      const token = access_token;
      const fields =
        "id,media_type,media_url,permalink,timestamp,caption,username";
      const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
      const fetch_response = await fetch(url);
      const json = fetch_response.ok
        ? await fetch_response.json()
        : fetch_response.statusText;
      return json;
    }
    getInstaFeed(TOKEN);
  }, []);

  return (
    <div className="instaGrid">
      {instagramData
        ?.filter((item) => item.media_type === "IMAGE")
        .slice(0, numberOfPhotos)
        .map((img) => {
          return <InstaPost key={img.id} {...img} />;
        })}
    </div>
  );
}

export default ReactFeedPlugin;
