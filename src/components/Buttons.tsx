import { Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useModalControl } from "../hooks/useModalControl/useModalControl"
import { ModalNames } from "../hooks/useModalControl/modalNames"

export const Buttons = () => {
  const {
    options: { openModal },
  } = useModalControl()

  return (
    <Grid>
      <Typography variant="h6" mb="10px">
        Click on the buttons to see the various modal windows.
      </Typography>
      <Grid container justifyContent="center" gap={2}>
        <Button
          color="info"
          variant="contained"
          onClick={() => openModal(ModalNames.loading)}
        >
          Loading
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={() => openModal(ModalNames.success)}
        >
          Success
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => openModal(ModalNames.error)}
        >
          Error
        </Button>
        <Button
          color="warning"
          variant="contained"
          onClick={() => openModal(ModalNames.warning)}
        >
          Warning
        </Button>
      </Grid>
    </Grid>
  )
}
