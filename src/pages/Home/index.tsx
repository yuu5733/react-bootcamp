import { useEffect } from 'react';
import { Container, Grid } from "@material-ui/core";
import { VideoCard } from "src/components/VideoCard";

export const Home = () => {
  useEffect(() => {
    document.title = "ホーム";
  })

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>

        <Grid item xs={4}>
          <VideoCard />
        </Grid>
      </Grid>
    </Container>
  );
};