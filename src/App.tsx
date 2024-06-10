import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import "./App.css"
import {
  BasicTable,
  Buttons,
  ErrorModal,
  LoadingModal,
  SuccessModal,
  WarningModal,
} from "./components"
import { ProductModal } from "./components/Modals/ProductModal"

import medium from "./assets/medium.png"

const App = () => {
  return (
    <Grid className="App" alignItems="center" gap={2}>
      <ProductModal />
      <LoadingModal />
      <SuccessModal />
      <ErrorModal />
      <WarningModal />

      <Typography variant="h3">
        The useModalControl hook is used here
      </Typography>

      <BasicTable />
      <Buttons />

      <Divider sx={{ width: "100%" }} />
      <Grid container columnGap={2}>
        <Grid container alignItems="center" columnGap="8px">
          <GitHubIcon />
          <Typography
            component="a"
            href="https://github.com/Denis-Karpiuk/useModalControl"
            target="_blank"
            variant="h6"
          >
            GitHub
          </Typography>
        </Grid>

        <Grid container alignItems="center" columnGap="8px">
          <LinkedInIcon color="info" />
          <Typography
            component="a"
            href="https://www.linkedin.com/in/denis-karpiuk-31b0a9212/"
            target="_blank"
            variant="h6"
          >
            Linkedin
          </Typography>
        </Grid>
        <Grid container alignItems="center" columnGap="8px">
          <img src={medium} alt="medium" />
          <Typography
            component="a"
            href="https://medium.com/p/e45ef7c23cd3/edit"
            target="_blank"
            variant="h6"
          >
            Medium
          </Typography>
        </Grid>
        <Grid container alignItems="center" columnGap="8px">
          <Typography
            sx={{
              color: "white",
              bgcolor: "#303b44",
              borderRadius: "2px",
              padding: "4px",
            }}
            component="a"
            href="https://habr.com/ru/sandbox/new/"
            target="_blank"
            variant="h6"
          >
            Хабр
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
