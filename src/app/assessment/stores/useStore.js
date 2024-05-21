import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware'


// const useStore = create((set) => {
//     url: 'https://services.onetcenter.org/ws/mnm/interestprofiler/questions',
//     setUrl: () => set((state) => ({url: state.url})),
// })

// const urlStore = create((set) => ({
//     url: 'https://services.onetcenter.org/ws/mnm/interestprofiler/questions',
//     setUrl: () => set((state) => ({url: state.url}))
// }))

// const urlStore = create((set) => ({
//     url: 'https://services.onetcenter.org/ws/mnm/interestprofiler/questions',
//     setUrl: (updatedURL) => set(() => ({url: updatedURL}))
// }))

/* This is the one that I used perviously */

const urlStore = create((set) => ({
    url: '',
    setUrl: (updatedURL) => set(({url: updatedURL}))
}))


// const useStore = create((set) => ({
//     url: "https://services.onetcenter.org/ws/mnm/interestprofiler/questions",
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
//   }))

// const urlStore = create(
//   persist(
//     (set, get) => ({
//       url: '',
//       setUrl: (updatedURL) => set({ url: get().updatedURL }),
//     }),
//     {
//       name: 'url-storage', // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
//     },
//   ),
// )



export default urlStore; 