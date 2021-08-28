import { Dialog, DialogTitle, DialogContent, Divider} from "@material-ui/core";

export const Upload = () => {
  return (
    // ダイアログコンポーネント
    // fullWidth: trueの場合、画面いっぱいにダイアログを表示
    // maxWidth: ダイアログの横幅の最大値を指定。指定できるプロパティはこちら(https://material-ui.com/api/dialog/)
    // open: ダイアログを表示するか。今回はURLを開いている際は、表示し続けるのでtrueを指定
    <Dialog fullWidth={true} maxWidth="md" open={true}>
      {/* タイトル用コンポーネント */}
      <DialogTitle>動画のアップロード</DialogTitle>

      {/* 横線コンポーネント */}
      <Divider />

      {/* コンテント用コンポーネント */}
      <DialogContent>ダイアログのコンテンツを作成</DialogContent>
    </Dialog>
  );
};
