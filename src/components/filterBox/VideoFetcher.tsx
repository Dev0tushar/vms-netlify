
import React, { useState, useEffect } from "react";
import axios from "axios";

interface VideoFetcherProps {
  location: string;
  onVideosFetched: (videos: any[]) => void;
}

const VideoFetcher: React.FC<VideoFetcherProps> = ({ location, onVideosFetched }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!location) return; 

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://127.0.0.1:8000/config/locations");
        const data = response.data;

        if (Array.isArray(data)) {
          const filteredVideos = data.filter((video: any) =>
            video.location && video.location.includes(location)
          );
          onVideosFetched(filteredVideos);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [location, onVideosFetched]);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>Error: {error}</div>;

  return null;
};

export default VideoFetcher;
