import { create } from "zustand";
type MacbookStore = {
  color: string;
  setColor: (c: string) => void;
  scale: number;
  setScale: (s: number) => void;
  videoTexture: string;
  setVideoTexture: (s: string) => void;
  reset: () => void;
};

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#adb5bd",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  videoTexture: "/videos/feature-1.mp4",
  setVideoTexture: (videoTexture: string) => set({ videoTexture }),
  reset: () => set({ color: "#adb5bd", scale: 0.08 }),
}));
export default useMacbookStore;
