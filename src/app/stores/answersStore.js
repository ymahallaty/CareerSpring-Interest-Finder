// stores/answersStore.js

import { create } from "zustand";

const useAnswersStore = create((set) => ({
  answersArray: "",
  setAnswersArray: (newAnswers) => set({ answersArray: newAnswers }),
}));

export default useAnswersStore;
