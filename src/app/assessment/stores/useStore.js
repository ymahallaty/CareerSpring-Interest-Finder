import {create} from 'zustand';
import {devtools, persist, createJSONStorage} from 'zustand/middleware'

  const urlStore = create(
    persist(
      (set) => ({
        url: 'https://services.onetcenter.org/ws/mnm/interestprofiler/questions',
        setUrl: (updatedURL) => {
          set({ url: updatedURL });
        //   console.log('Updated URL:', updatedURL);
        },
      }),
      {
        name: 'url-storage', // unique name for the storage item
        storage: createJSONStorage(() => localStorage), // use localStorage for persistence
      }
    )
  );


export default urlStore; 