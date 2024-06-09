import { ProductType } from "../../types"

export const ModalNames = {
  reset: "reset" as const,
  loading: "loading" as const,
  success: "success" as const,
  error: "error" as const,
  warning: "warning" as const,
  product: "product" as const,
}

type ModalNameChecker<T extends { [K in keyof typeof ModalNames]: unknown }> = T

export type SpecificModalDataType = ModalNameChecker<{
  reset: void
  loading: void
  success: string
  error: string
  warning: void
  product: ProductType
}>
