import { Slider } from '@/components/Slider';
import { usePlayerStore } from '@/store/playerStore';
import { useRef, useEffect, useState } from 'react';

export const Play = () => (
  <svg role='img' viewBox='0 0 16 16' width={16} height={16}>
    <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'></path>
  </svg>
);
export const Pause = () => (
  <svg role='img' viewBox='0 0 16 16' width={16} height={16}>
    <path d='M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z'></path>
  </svg>
);
export const VolumeMax = () => (
  <svg
    width={16}
    height={16}
    fill='currentColor'
    aria-hidden='true'
    id='volume-icon'
    viewBox='0 0 16 16'>
    <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
    <path d='M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z'></path>
  </svg>
);
export const VolumeMid = () => (
  <svg
    fill='currentColor'
    aria-hidden='true'
    width={16}
    height={16}
    viewBox='0 0 16 16'>
    <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z'></path>
  </svg>
);
export const VolumeLow = () => (
  <svg
    width={16}
    height={16}
    fill='currentColor'
    aria-hidden='true'
    id='volume-icon'
    viewBox='0 0 16 16'>
    <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
  </svg>
);
export const VolumeSilence = () => (
  <svg
    fill='currentColor'
    aria-hidden='true'
    width={16}
    height={16}
    viewBox='0 0 16 16'>
    <path d='M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z'></path>
    <path d='M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z'></path>
  </svg>
);

export const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);

  return (
    <div class='flex justify-center gap-x-2'>
      {volume < 0.1 && <VolumeSilence />}
      {volume > 0.1 && volume < 25 && <VolumeLow />}
      {volume > 25 && volume < 50 && <VolumeMid />}
      {volume > 50 && volume < 101 && <VolumeMax />}
      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        className='w-[95px]'
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(newVolume);
        }}
      />
    </div>
  );
};
const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className={` flex items-center gap-5 relative overflow-hidden`}>
      <picture className='w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden'>
        <img src={image} alt={title} />
      </picture>

      <div className='flex flex-col'>
        <h3 className='font-semibold text-sm block'>{title || 'Titulo'}</h3>
        <span className='text-xs opacity-80'>
          {artists?.join(', ') || 'Artistas'}
        </span>
      </div>
    </div>
  );
};

export function Player() {
  const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore(
    (state) => state,
  );
  const audioRef = useRef();
  const volumeRef = useRef();

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/src/music/${playlist?.id}/0${song?.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volumeRef.current || 1;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='grid grid-cols-3 w-full px-4 z-50'>
      <div>
        <CurrentSong {...currentMusic.song} />
      </div>

      <div className='grid place-content-center gap-4 flex-1'>
        <div className='flex justify-center'>
          <button
            className='bg-white rounded-full p-2'
            onClick={() => handleClick()}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <audio ref={audioRef} />
        </div>
      </div>

      <div className='flex justify-end items-center '>
        <VolumeControl />
      </div>
    </div>
  );
}
