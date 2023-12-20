import { useState, useEffect, useRef } from "react";
import seyi from "../assets/musics/Seyi_Vibez_-_Different_Pattern.mp3";
import { BsMusicPlayerFill } from "react-icons/bs";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayArrow,
  MdPause,
} from "react-icons/md";
import { songs } from "../data/songs";

const MusicPlayer = () => {
  const audioRef = useRef<any>();

  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const playNext = () => {
    if (currentSong == songs.length - 1) {
      setCurrentSong(0);
    } else {
      setCurrentSong((prev) => prev + 1);
    }
  };

  return (
    <div className="fixed bottom-[20px] left-[30px] bg-black w-fit h-[60px] flex items-center rounded-[10px] overflow-hidden">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-full w-[60px] bg-yellow flex justify-center items-center"
      >
        <BsMusicPlayerFill className="text-[30px] text-green" />
      </div>

      <audio
        className="hidden"
        controls
        src={songs[currentSong]?.song}
        ref={audioRef}
        onEnded={playNext}
      >
        Your browser does not support the audio element.
      </audio>

      <div
        className={`${
          isOpen ? "w-[70vw] vsm:w-[300px] pl-[10px] vsm:pl-[20px]" : "w-0"
        } duration-500 overflow-hidden flex flex-col items-center `}
      >
        <div className="w-full whitespace-nowrap mb-[4px] pb-[2px] border-b border-b-gray-600 flex justify-center gap-[5px] font-Miracle">
          <h1>{songs[currentSong]?.singer}</h1>
          <span>-</span>
          <p className="text-yellow">{songs[currentSong]?.title}</p>
        </div>
        <div className="player flex gap-[20px]">
          <MdSkipPrevious />
          <span className="text-yellow">
            {isPlaying ? (
              <MdPause onClick={() => setIsPlaying(false)} />
            ) : (
              <MdPlayArrow onClick={() => setIsPlaying(true)} />
            )}
          </span>
          <MdSkipNext onClick={playNext} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
