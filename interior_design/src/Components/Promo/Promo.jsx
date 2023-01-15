import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { intro } from "../../constants";
import { Container, Body, VideoCircle } from "./PromoElements";
const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handelVideo = () => {
    setPlayVideo((prePlayVideo) => !prePlayVideo);

    if (playVideo) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  return (
    <Container>
      <video
        src={intro}
        ref={vidRef}
        type="video/webm"
        Loop
        controls={false}
        muted
        autoPlay
        data-aos="flip-left" />

      <Body>
        <VideoCircle onClick={handelVideo}>
          {playVideo ? (
            <BsFillPlayFill color="#fff" fontSize={70}  />
          ) : (
            <BsPauseFill color="#fff" fontSize={70} />
          )}
        </VideoCircle>
      </Body>
    </Container>
  );
};
export default Intro;


