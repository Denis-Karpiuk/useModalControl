import { Dialog, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useModalControl } from "../../hooks/useModalControl/useModalControl"
import WarningAmberIcon from "@mui/icons-material/WarningAmber"

export const WarningModal = () => {
  const {
    isWarningModal,
    options: { closeModal },
  } = useModalControl()

  return (
    <Dialog open={isWarningModal} onClose={closeModal}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        p="20px"
      >
        <WarningAmberIcon color="warning" fontSize="large" />
        <Typography variant="h6" mt="10px">
          Warning Modal Window
        </Typography>
      </Grid>
    </Dialog>
  )
}
