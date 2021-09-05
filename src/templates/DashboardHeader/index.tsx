import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Logo } from "src/components/Logo";
import { SearchBar } from "src/templates/DashboardHeader/SearchBar/index";
// codegenで生成したコードをimport
import { useUserByIdQuery } from "src/utils/graphql/generated";

import useStyles from "src/templates/DashboardHeader/styles";

export const DashboardHeader = () => {
  // CSSを生成
  const styles = useStyles();

  //GraphQLの`Query`を発行して、Hasuraのエンドポイントにリクエストを飛ばし、返り値を取得
  const { data, error } = useUserByIdQuery({
    variables: { id: "testid" },
  });

  useEffect(() => {
    console.log(data);
    console.log(error);
  }, [data]);

  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar className={styles.between}>
        <div className={styles.flex}>
          <IconButton>
            <MenuIcon />
          </IconButton>

          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>
        </div>

        <SearchBar />
        
        <div className={styles.flex}>
          {/* `data`内に`Schema`と同じ名前のオブジェクトのデータが格納されている */}
          <IconButton>
            <Typography>{data?.users_by_pk?.name}</Typography>
          </IconButton>

          <IconButton>
            <VideoCallIcon />
          </IconButton>

          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};