import create from 'zustand';

const riasecStore = create(set => ({
  riasecArray: [],
  setRiasecArray: newArray => set({ riasecArray: newArray })
}));

export default riasecStore;