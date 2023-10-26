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
  const agora = new Date();

  function displayTime(dateObj) {
    const now = new Date();
    const diferenca = now.getTime() - dateObj.getTime();

    const milissegundosPorDia = 24 * 60 * 60 * 1000; // 1 dia em milissegundos
    const milissegundosPorHora = 60 * 60 * 1000; // 1 hora em milissegundos
    const milissegundosPorMinuto = 60 * 1000; // 1 minuto em milissegundos
    const milissegundosPorSegundo = 1000; // 1 segundo em milissegundos

    let dias = Math.floor(diferenca / milissegundosPorDia);
    let horas = Math.floor(
      (diferenca % milissegundosPorDia) / milissegundosPorHora
    );
    let minutos = Math.floor(
      (diferenca % milissegundosPorHora) / milissegundosPorMinuto
    );
    let segundos = Math.floor(
      (diferenca % milissegundosPorMinuto) / milissegundosPorSegundo
    );

    return `${dias}d ${horas}h ${minutos}m`;
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
          <a href="https://www.instagram.com/divino_closettmg/">
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
            <p>{displayTime(time)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstaPost;
