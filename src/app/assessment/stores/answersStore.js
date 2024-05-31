// stores/useStore.js
import { create } from 'zustand';

const useStoreAnswers = create((set) => ({
  userAnswerValues: [], // Store just the values
  updateUserAnswerValues: (newValues) => set({ userAnswerValues: newValues }),
}));

export default useStoreAnswers;
