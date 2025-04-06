import { create } from 'zustand'

type ModalStore = {
  modals: { [key: string]: boolean };
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  closeAllModals: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modals: {},

  openModal: (modalName: string) => set((state: ModalStore) => ({
    modals: { ...state.modals, [modalName]: true }
  })),

  closeModal: (modalName: string) => set((state: ModalStore) => ({
    modals: { ...state.modals, [modalName]: false }
  })),

  closeAllModals: () => set({ modals: {} })
}));
