import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleProgress = (state: { played: number }) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeeking(false);
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.target.value));
    }
  };

  const handleSkipIntro = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(90); // Skip 90 seconds (typical intro length)
    }
  };

  return (
    <div className="relative group">
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        className="react-player"
        width="100%"
        height="100%"
        playing={playing}
        volume={volume}
        onProgress={handleProgress}
        controls={true}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0
            }
          }
        }}
      />
      
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-md transition-colors"
          onClick={handleSkipIntro}
        >
          Skip Intro
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayPause}
            className="text-white hover:text-gray-300"
          >
            {playing ? 'Pause' : 'Play'}
          </button>
          
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-24"
          />
          
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className="flex-grow"
          />
        </div>
      </div>
    </div>
  );
}