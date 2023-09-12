import { create } from 'zustand'

type CartStore = {
  cart: number
  add: () => void
  remove: () => void
  removeAll: () => void
}

export const useCartStore = create<CartStore>(
  (set) => ({
    cart: 0,
    add: () =>
      set((state) => ({ cart: state.cart + 1 })),
    remove: () =>
      set((state) => ({ cart: state.cart - 1 })),
    removeAll: () => set({ cart: 0 }),
  })
)

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
