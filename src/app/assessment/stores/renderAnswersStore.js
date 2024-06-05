import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

const renderAnswersStore = create(
  persist(
    (set) => ({
      answersObject: {},
      setAnswersObject: (newAnswers) => set({ answersObject: newAnswers })
      ,
    }),
    {
      name: 'answers-storage', // this here is a unique name for the storage item
      storage: createJSONStorage(() => sessionStorage), // we use sessionStorage for persistence
    }
  )
);

export default renderAnswersStore;