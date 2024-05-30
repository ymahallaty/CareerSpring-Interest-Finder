import { create } from "zustand";
import {persist, createJSONStorage} from 'zustand/middleware'

const useAnswersStore = create(
  persist(
    (set) => ({
      answersArray: {},
      setAnswersArray: (newAnswers) => set({ answersArray: newAnswers })
      ,
    }),
    {
      name: 'answers-storage', // this here is a unique name for the storage item
      storage: createJSONStorage(() => localStorage), // we use localStorage for persistence
    }
  )
);

export default useAnswersStore;