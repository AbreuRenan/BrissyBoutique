import axios from "axios";
import React from "react";

function ReactFeedPlugin() {
  const [instagramData, setInstagramData] = React.useState([]);
  async function getInstaFeed() {
    const token = import.meta.env.VITE_REACT_APP_FEED_PLUGIN_ACCESS_TOKEN;
    const fields = "id,media_type,media_url,permalink";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
    const { data } = await axios.get(url);
    setInstagramData([instagramData, ...data["data"]]);
  }

  React.useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {instagramData
        ?.filter((item) => item.media_type === "IMAGE")
        .map((img) => {
          return (
            <div key={img.id}>
              <img
                src={img.media_url}
                frameBorder="0"
                width={"auto"}
                height={"200px"}
              />
            </div>
          );
        })}
    </div>
  );
}

export default ReactFeedPlugin;
