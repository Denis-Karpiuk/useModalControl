import { Dialog, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useModalControl } from "../../hooks/useModalControl/useModalControl"

export const ProductModal = () => {
  const {
    isProductModal,
    options: {
      closeModal,
      modalData: { productModalData: product },
    },
  } = useModalControl()

  return (
    <Dialog open={isProductModal} onClose={closeModal}>
      <Grid container direction="column" width="260px" p="20px" gap="10px">
        <Grid container justifyContent="center">
          <Typography variant="h5">{product?.name}</Typography>
        </Grid>
        <Grid container alignItems="center" columnGap="8px">
          <Typography variant="subtitle1">Calories:</Typography>
          <Typography>{product?.calories}</Typography>
        </Grid>
        <Grid container alignItems="center" columnGap="8px">
          <Typography variant="subtitle1">Fat (g):</Typography>
          <Typography>{product?.fat}</Typography>
        </Grid>
        <Grid container alignItems="center" columnGap="8px">
          <Typography variant="subtitle1">Carbs (g):</Typography>
          <Typography>{product?.carbs}</Typography>
        </Grid>
        <Grid container alignItems="center" columnGap="8px">
          <Typography variant="subtitle1">Protein (g):</Typography>
          <Typography>{product?.protein}</Typography>
        </Grid>
      </Grid>
    </Dialog>
  )
}
