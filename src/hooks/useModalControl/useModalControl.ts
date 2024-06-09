import { useDispatch, useSelector } from "react-redux"
import { ModalNames, SpecificModalDataType } from "./modalNames"
import { capitalizeFirstLetter } from "./utils/capitalizeFirstLetter"
import {
  ModalSliceType,
  selectModalData,
  setModalData,
} from "../../store/modalSlice"

type ModalNameKeys = keyof typeof ModalNames
type ModalKeysType = {
  [K in ModalNameKeys as `is${Capitalize<K>}Modal`]: boolean
}
type ModalDataType = {
  [K in ModalNameKeys as `${K}ModalData`]?: SpecificModalDataType[K]
}

type ModalControlType = ModalKeysType & {
  options: {
    modalData: ModalDataType
    openModal: <K extends ModalNameKeys>(
      key: K,
      data?: SpecificModalDataType[K],
    ) => void
    closeModal: () => void
  }
}

export const useModalControl = (): ModalControlType => {
  const currentModalData = useSelector(selectModalData)

  const dispatch = useDispatch()

  const matches = {} as ModalKeysType
  let ModalKey: keyof typeof ModalNames
  for (ModalKey in ModalNames) {
    const key =
      `is${capitalizeFirstLetter(ModalKey)}Modal` as keyof ModalKeysType
    matches[key] = ModalNames[ModalKey] === currentModalData.name
  }

  return {
    ...matches,
    options: {
      modalData: {
        [`${currentModalData.name}ModalData`]: currentModalData.value,
      },
      openModal: (key, data) => {
        dispatch(
          setModalData({
            name: key,
            value: data,
          } as ModalSliceType["modalData"]),
        )
      },
      closeModal: () => {
        dispatch(
          setModalData({
            name: ModalNames.reset,
            value: undefined,
          }),
        )
      },
    },
  }
}
