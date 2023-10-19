import { useEffect, useRef } from 'react';
import shaka from 'shaka-player'

export const Player = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const player = new shaka.Player(videoRef.current);
    player.load("manifest url");
  }, []);
  
  return (
    <video
      ref={videoRef}
      autoPlay
      controls
    />
  )
}
