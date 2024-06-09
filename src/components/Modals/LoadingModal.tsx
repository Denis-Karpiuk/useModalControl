import { Dialog, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useModalControl } from "../../hooks/useModalControl/useModalControl"
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom"

export const LoadingModal = () => {
  const {
    isLoadingModal,
    options: { closeModal },
  } = useModalControl()

  return (
    <Dialog open={isLoadingModal} onClose={closeModal}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        p="20px"
      >
        <HourglassBottomIcon color="info" fontSize="large" />
        <Typography variant="h6" mt="10px">
          Loading Modal Window
        </Typography>
      </Grid>
    </Dialog>
  )
}
