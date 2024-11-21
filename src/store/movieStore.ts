import { create } from "zustand";

interface IMovieSortStore {
  sort: boolean;
  toggleSortByRelease: () => void;
  toggleSortByAlphabet: () => void;
}

export const useMovieSortStore = create<IMovieSortStore>((set) => ({
  sort: false,
  toggleSortByRelease: () => set(() => ({ sort: false })),
  toggleSortByAlphabet: () => set(() => ({ sort: true })),
}));
