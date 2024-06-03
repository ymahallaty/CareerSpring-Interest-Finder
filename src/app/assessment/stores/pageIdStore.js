import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware'

  const pageIDStore = create(
    persist(
      (set) => ({
        showPageId: 1,
        increasePage_id: () => set((state) => ({showPageId: state.showPageId + 1})),
        decreasePage_id: () => set((state) => ({showPageId: state.showPageId - 1})),
        defaultPage_id: (testing) => set({ showPageId: testing }),
      }),
      {
        name: 'page_id-storage', // this here is a unique name for the storage item
        storage: createJSONStorage(() => localStorage), // we use localStorage for persistence
      }
    )
  );


export default pageIDStore; 
