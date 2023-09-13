import { create } from 'zustand'

type SettingsStore = {
  activeTab:
    | 'Overview'
    | 'Account Settings'
    | 'Payment Info'
  setActiveTab: (
    tab:
      | 'Overview'
      | 'Account Settings'
      | 'Payment Info'
  ) => void
}

export const useSettingsStore =
  create<SettingsStore>((set) => ({
    activeTab: 'Account Settings',
    setActiveTab: (
      tab:
        | 'Overview'
        | 'Account Settings'
        | 'Payment Info'
    ) => set({ activeTab: tab }),
  }))

type modalStore = {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  toggleModalOpen: (prevState: boolean) => void
}

export const useModalStore = create<modalStore>(
  (set) => ({
    isModalOpen: false,
    setIsModalOpen: (boolean: boolean) =>
      set({ isModalOpen: boolean }),
    toggleModalOpen: () =>
      set((state) => ({
        isModalOpen: !state.isModalOpen,
      })),
  })
)
