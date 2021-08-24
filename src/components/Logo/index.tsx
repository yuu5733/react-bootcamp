import useStyles from "components/Logo/style";

export const Logo = () => {
  // CSSを生成
  const styles = useStyles();

  return (
  <img 
    className={styles.root}
    src="/static/yt_logo_rgb_light.png" 
    alt="Youtube Logo" 
  />
  );
};