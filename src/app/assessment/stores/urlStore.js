import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware'

  const urlStore = create(
    persist(
      (set) => ({
        url: 'https://services.onetcenter.org/ws/mnm/interestprofiler/questions',
        // url: '',
        setUrl: (updatedURL) => {
          set({ url: updatedURL });
          // console.log('Updated URL:', updatedURL);
        },
      }),
      {
        name: 'url-storage', // this here is a unique name for the storage item
        storage: createJSONStorage(() => sessionStorage), // we use sessionStorage for persistence
      }
    )
  );


export default urlStore; 
