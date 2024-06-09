import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import {
  ModalNames,
  SpecificModalDataType,
} from "../hooks/useModalControl/modalNames"

export type ModalSliceType<
  T extends keyof typeof ModalNames = keyof typeof ModalNames,
> = T extends infer K
  ? K extends T
    ? {
        modalData: {
          name: K
          value: SpecificModalDataType[K]
        }
      }
    : never
  : never

const initialState: ModalSliceType = {
  modalData: { name: ModalNames.reset, value: undefined },
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state: ModalSliceType, action: PayloadAction<any>) => {
      state.modalData = action.payload
    },
  },
  selectors: {
    selectModalData: state => state.modalData,
  },
})

// Action creators
export const { setModalData } = modalSlice.actions

// Selectors
export const { selectModalData } = modalSlice.selectors
