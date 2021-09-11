import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import { useState, useRef, ChangeEvent, useEffect} from "react";
import useStyles from "./style";

export const VideoSelect = () => {
  const styles = useStyles();
  
  // 選択されたファイルを保持します。
  const [file, setFile] = useState<File>();
  // 動画表示用のURLを格納
  const [videoURL, setVideoURL] = useState<string>();
  // サムネイルの画像URLを格納する配列state
  const [thumbnailURLs, setThumbnailURLs] = useState<string[]>([]);

  // サムネイルを生成する関数
  const createThumbnail = (videoRefURL: string) => {
    // canvasタグを使って、<video>のビューを転写する
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");


    // <video>の動画の読み込みが終わったら、<canvas>に<video>と同じサイズにリサイズ
    video.onloadeddata = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = 0;
    };

    // シーク操作が完了し、現在の再生位置が変更された(onseeked)
    // video.currentTime が動画の最後になるまで繰り返す
    video.onseeked = () => {
      // HTMLMediaElement.duration（メディアの長さを秒単位で示す）
      if (video.currentTime >= video.duration || !context) return;

      // <video>のビューを<canvas>に転写
      context.drawImage(video, 0, 0);

      // prevState: 保存済みのstateの値（配列）、新しい関数を作ることで更新される。pushだとダメ。
      setThumbnailURLs((prevState: string[]) => [...prevState, canvas.toDataURL("image/jpeg")]);
      video.currentTime += Math.ceil(video.duration / 3);
    };

    // createThumbnail関数の引数である、動画の読み込み。
    // 関数が先に定義されている必要があり、この位置にいる。
    video.src = videoRefURL;
    video.load();
  };

  // 「ファイルを選択」したあとに、選択されたファイルを上記のfileに代入する処理
  const selectedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setFile(event.currentTarget.files[0]);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoURL(videoURL);
      createThumbnail(videoURL);
    }
  }, [file]);

  return (
    <div className={styles.root}>
        {videoURL && (
          <div className={styles.full}>
            <CardMedia component="video" src={videoURL} controls />

            <Typography className={styles.textPadding}>サムネイル</Typography>
            <Grid container spacing={2} className={styles.thumbnailContent} aria-label="three preview thumbnails">
              {thumbnailURLs.map((url) => {
                return (
                  <Grid item xs={4}>
                    <CardMedia image={url} style={{ paddingTop: "56.25%" }} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
        <input type="file" hidden ref={inputRef} onChange={selectedFile} />
          {file?.name}
        {/* variant="contained” でボタンを塗りつぶす */}
        {!videoURL && <Button  variant="contained" color="primary" onClick={handleClick}>ファイルを選択</Button>}
    </div>
  );
};