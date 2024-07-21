import { useState } from "react";
import myApiConsumer from "./config";
import { Album } from "../Model/AlbumModel";

function AlbumRequestHook() {
  const [err, setErr] = useState("");
  const [albums, setAlbums] = useState<Album[] | undefined>();

  const requestAlbums = async () => {
    await myApiConsumer.get('/albums')
      .then(res => {
        setAlbums(res.data);
      })
      .catch(err => {
        setErr(err);
      });
    console.log('terminou de processar os albums');
  }

  return { err, albums, requestAlbums }
}

export default AlbumRequestHook