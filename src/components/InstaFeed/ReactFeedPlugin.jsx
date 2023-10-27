import React from "react";
import useMedia from "../CustomHooks/useMedia";
import InstaPost from "./InstaPost";
import "./InstaPost.css";

const apiUrl = import.meta.env.VITE_API_URL;

function ReactFeedPlugin() {
  const [instagramData, setInstagramData] = React.useState([]);
  const mobileState = useMedia("(max-width: 40rem)");
  const numberOfPhotos = mobileState ? 3 : 6;

  React.useEffect(() => {
    async function getInstaFeed() {
      try {
        const { data } = await fetch(`${apiUrl}/GET_INSTAFEED`).then((r) =>
          r.ok ? r.json() : r.statusText
        );
        setInstagramData((i) => [i, ...data]);
      } catch (error) {
        console.log(error);
      }
    }
    getInstaFeed();
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
