import { InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "templates/DashboardHeader/SearchBar/styles";

export const SearchBar = () => {
  const styles = useStyles();

  return (
    // elevation={0} : 影を削除
    // variant="outlined" : 枠線を表示
    <Paper className={styles.root} elevation={0} variant="outlined">
      <InputBase className={styles.input} placeholder="検索" />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
    </Paper>
  );
};