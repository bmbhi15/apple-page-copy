import { create } from "zustand";
type MacbookStore = {
  color: string;
  setColor: (c: string) => void;
  scale: number;
  setScale: (s: number) => void;
  reset: () => void;
};

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#adb5bd",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: "#adb5bd", scale: 0.08 }),
}));
export default useMacbookStore;
