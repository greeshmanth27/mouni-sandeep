import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AudioStore {
  isBackgroundMusicPlaying: boolean;
  setBackgroundMusicPlaying: (playing: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  hasUserInteracted: boolean;
  setUserInteracted: (interacted: boolean) => void;
}

const useAudioControl = create<AudioStore>()(
  persist(
    (set) => ({
      isBackgroundMusicPlaying: true,
      setBackgroundMusicPlaying: (playing) => set({ isBackgroundMusicPlaying: playing }),
      volume: 0.5,
      setVolume: (volume) => set({ volume }),
      hasUserInteracted: false,
      setUserInteracted: (interacted) => set({ hasUserInteracted: interacted }),
    }),
    {
      name: 'audio-settings',
    }
  )
);

export default useAudioControl;