import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Grid,
  Divider
} from "@material-ui/core";

import { VideoSelect } from "src/pages/Upload/VideoSelector";

export const Upload = () => {
  return (
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      <DialogTitle>動画のアップロード</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={4}>
          <Grid xs item>
            <VideoSelect /> 
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid xs item>
            右側
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
