import { Card, CardHeader, CardMedia } from "@material-ui/core";

import { HeaderTitle } from "src/components/VideoCard/HeaderTitle";
import { SubHeaderContent } from "src/components/VideoCard/SubHeaderContent";

import useStyles from "./styles";

export const VideoHorizontalCard = () => {
  const styles = useStyles();

  return (
    <Card 
      className={`${styles.root} ${styles.transparent}`}
      elevation={0} 
      square
    >

      <div className={styles.thumbnail}>
        <CardMedia 
          className={styles.media}
          image="/static/no-image.jpg" 
          title="Thumbnail" 
        />
      </div>

      <CardHeader
        className={styles.contentPadding} 
        title={<HeaderTitle />}
        subheader={<SubHeaderContent />}
/>
    </Card>
  );
};
