import { Dialog, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useModalControl } from "../../hooks/useModalControl/useModalControl"
import CheckIcon from "@mui/icons-material/Check"

export const SuccessModal = () => {
  const {
    isSuccessModal,
    options: { closeModal },
  } = useModalControl()

  return (
    <Dialog open={isSuccessModal} onClose={closeModal}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        p="20px"
      >
        <CheckIcon color="success" fontSize="large" />
        <Typography variant="h6" mt="10px">
          Success Modal Window
        </Typography>
      </Grid>
    </Dialog>
  )
}
