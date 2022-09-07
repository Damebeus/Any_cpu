import React from "react";
import video from "../../assets/bgv.mp4";
import style from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div>
      <div className={style.contVideo}>
        <video
          className={style.video}
          autoPlay
          loop
          muted
          src={video}
          type='video/mp4'
        />
      </div>
      ;
    </div>
  );
};

export default Welcome;
