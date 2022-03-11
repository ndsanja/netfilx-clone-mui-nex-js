import { Box, Container, Grid, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";
import Image from "next/image";

type Props = {
  text: string;
};

const Title = ({ text }: Props) => (
  <Typography
    variant="h3"
    component="h2"
    gutterBottom
    sx={{ textAlign: { xs: "center", md: "left" } }}
  >
    {text}
  </Typography>
);

const Description = ({ text }: Props) => (
  <Typography
    variant="h5"
    component="h5"
    gutterBottom
    sx={{ textAlign: { xs: "center", md: "left" } }}
  >
    {text}
  </Typography>
);

const Features = () => {
  return (
    <Box sx={{ bgcolor: "common.black", color: "common.white" }}>
      {/* tv */}
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={10}>
            <Grid item xs={12} md={6}>
              <Title text="Enjoy on your TV." />
              <Description text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src="/__images/tv.png"
                    width="640px"
                    height="480px"
                    layout="responsive"
                    alt="tv"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxWidth: "74%",
                    maxHeight: "58%",
                    top: "48%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <video
                    src="/__videos/tv.m4v"
                    style={{ height: "100%", width: "100%" }}
                    autoPlay
                    playsInline
                    muted
                    loop
                  ></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      {/* mobile */}
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={10}>
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ position: "relative" }}>
                <Box>
                  <Image
                    src="/__images/mobile.jpg"
                    width="640px"
                    height="480px"
                    layout="responsive"
                    alt="Mobile"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bgcolor: "common.black",
                    zIndex: 1,
                    border: `2px solid ${grey[700]}`,
                    borderRadius: 2,
                    p: 1,
                    width: {
                      xs: "80%",
                      sm: "70%",
                      md: "60%",
                    },
                    bottom: {
                      xs: "4%",
                      md: "10%",
                    },
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2} md={3}>
                      <Image
                        src="/__images/boxshot.png"
                        width="55px"
                        height="80px"
                        layout="intrinsic"
                        alt="Boxshot"
                      />
                    </Grid>
                    <Grid item xs={8} md={6}>
                      <Typography>Stranger Things</Typography>
                      <Typography variant="body1" color={blue.A400}>
                        Downloading...
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={3}>
                      <Image
                        src="/__images/download.gif"
                        width="50px"
                        height="50px"
                        layout="intrinsic"
                        alt="Download"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Title text="Download your shows to watch offline." />
              <Description text="Save your favorites easily and always have something to watch." />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      {/* watch everywere */}
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={10}>
            <Grid item xs={12} md={6}>
              <Title text="Watch everywhere." />
              <Description text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src="/__images/devices.png"
                    width="640px"
                    height="480px"
                    layout="responsive"
                    alt="tv"
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxWidth: "65%",
                    maxHeight: "49%",
                    top: "33%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <video
                    src="/__videos/devices.m4v"
                    style={{ height: "100%", width: "100%" }}
                    autoPlay
                    playsInline
                    muted
                    loop
                  ></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      {/* kids */}
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container alignItems="center" columnSpacing={10}>
            <Grid item xs={12} md={6}>
              <Title text="Create profiles for kids." />
              <Description text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src="/__images/kids.png"
                    width="640px"
                    height="480px"
                    layout="responsive"
                    alt="tv"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>
    </Box>
  );
};

export default Features;
