import { create } from 'zustand';

interface AudioStore {
  isBackgroundMusicPlaying: boolean;
  setBackgroundMusicPlaying: (playing: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const useAudioControl = create<AudioStore>((set) => ({
  isBackgroundMusicPlaying: true,
  setBackgroundMusicPlaying: (playing) => set({ isBackgroundMusicPlaying: playing }),
  volume: 1,
  setVolume: (volume) => set({ volume }),
}));

export default useAudioControl;