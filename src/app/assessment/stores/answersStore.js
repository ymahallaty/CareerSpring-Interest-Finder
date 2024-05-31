// stores/useStore.js
// import {create} from 'zustand';

// const useStoreAnswers = create((set) => ({
//   answers: {},
//   updateUserAnswers: (question, value) =>
//     set((state) => ({ answers: { ...state.answers, [question]: value } }))
// }));

// export default useStoreAnswers;

// stores/answersStore.js
import { create } from 'zustand';

const useStoreAnswers = create((set) => ({
  userAnswerValues: [], // Store just the values
  updateUserAnswerValues: (newValues) => set({ userAnswerValues: newValues }),
}));

export default useStoreAnswers;
