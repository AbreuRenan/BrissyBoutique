import React from "react";
import "./InstaPost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

import profilePicture from "../../assets/imgs/logo.png";

function InstaPost(data) {
  const { permalink, media_url, username, caption, timestamp } = data;
  const time = new Date(timestamp);

  function displayData(timestamp) {
    const data = new Date(timestamp);
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const dia = data.getDate();
    const mesPorExtenso = meses[data.getMonth()];
    const ano = data.getFullYear();
    const dataFormatada = `${dia} de ${mesPorExtenso} de ${ano}`;
    return dataFormatada;
  }

  return (
    <>
      <div className="instagram_card">
        <div className="post_header">
          <div className="post_user_details">
            <div className="post_profile_picture">
              <img src={profilePicture} alt="foto de perfil" />
            </div>
            <div className="post_profile_name">{username}</div>
            <a href="https://www.instagram.com/divino_closettmg/">Seguir</a>
          </div>
        </div>

        <div className="post_image_container">
          <a href={permalink}>
            <img src={media_url} className="post_image_photo" />
          </a>
        </div>

        <div className="post_content">
          <div className="post_actions_bar">
            <div className="post_actions">
              <FontAwesomeIcon icon={faHeart} size="xl" color="#333" />
              <FontAwesomeIcon icon={faComment} size="xl" color="#333" />
              <FontAwesomeIcon icon={faPaperPlane} size="xl" color="#333" />
            </div>
            <div className="post_bookmark">
              <FontAwesomeIcon icon={faBookmark} size="xl" color="#333" />
            </div>
          </div>
          <div className="post_likes">
            Curtido por <strong>Brissy</strong> e outras pessoas
          </div>
          <div className="post_caption">
            @<strong>{username}</strong> {caption}
          </div>
          <div className="post_time_upload">
            <p>{displayData(time)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstaPost;
