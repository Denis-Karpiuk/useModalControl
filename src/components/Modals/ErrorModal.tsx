import { Dialog, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useModalControl } from "../../hooks/useModalControl/useModalControl"
import CancelIcon from "@mui/icons-material/Cancel"

export const ErrorModal = () => {
  const {
    isErrorModal,
    options: { closeModal },
  } = useModalControl()

  return (
    <Dialog open={isErrorModal} onClose={closeModal}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        p="20px"
      >
        <CancelIcon color="error" fontSize="large" />
        <Typography variant="h6" mt="10px">
          Error Modal Window
        </Typography>
      </Grid>
    </Dialog>
  )
}
