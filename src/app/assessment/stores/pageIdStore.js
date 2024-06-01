import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware'

  const pageIDStore = create(
    persist(
      (set) => ({
        page_id: 1,
        setPage_id: (update_pageID) => {
          set({ page_id: update_pageID });
          console.log('Updated page_id:', page_id);
        },
      }),
      {
        name: 'page_id-storage', // this here is a unique name for the storage item
        storage: createJSONStorage(() => localStorage), // we use localStorage for persistence
      }
    )
  );


export default pageIDStore; 
