import { Pause, Play } from '@/components/Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = async () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    const res = await fetch(`/api/get-info-playlist.json?id=${id}`);
    const data = await res.json();
    const { songs, playlist } = data;
    setCurrentMusic({
      songs,
      playlist,
      song: songs[0],
    });
    setIsPlaying(true);
  };

  return (
    <button
      className='rounded-full card-play-button bg-green-500 p-4'
      onClick={handleClick}>
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}
