import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoStreamProps {
  src: string; 
}

const VideoStream: React.FC<VideoStreamProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current!);
    } else if (videoRef.current && videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
    }
  }, [src]);

  return <video ref={videoRef} controls style={{ width: '100%' }} />;
};

export default VideoStream;
