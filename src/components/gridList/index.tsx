import type { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import "./styles.scss";
import Modal from "../modal";
import GridItem from "../gridItem";
import { Photo } from "../../types";
import { getPhoto } from "../../api/service/unsplash";

type Props = {
  results: Photo[];
};

const GridList: FC<Props> = ({ results }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDialog, setshowDialog] = useState<boolean>(false);
  const [dialogOptions, setDialogOptions] = useState<Photo>();
  const [loading, setLoading] = useState<boolean>(false);
  const storage = useSelector((state: RootStateOrAny) => state.favorites);

  const openDialog = (item: Photo) => {
    setshowDialog(true);
    setDialogOptions(item);
    if (location.pathname !== "/favorites") {
      navigate(`/photos/${item.id}`, {
        replace: true,
      });
    }
  };

  const getPhotoInfo = async (id: string) => {
    setLoading(true);
    const { data } = await getPhoto(id);

    const checking = {
      ...data,
      favourite: storage.findIndex((el: Photo) => el.id === data.id) > -1,
    };
    openDialog(checking);
    setLoading(false);
  };

  const closeDialog = () => {
    setshowDialog(false);
    if (location.pathname !== "/favorites") {
      navigate("/", {
        replace: true,
      });
    }
  };

  useEffect(() => {
    const pathName = location.pathname;
    if (pathName !== "/" && pathName !== "/favorites" && !showDialog) {
      const photoId = pathName.split("photos/")[1];
      const photo = results.find((el) => el.id === photoId);
      if (photo) {
        getPhotoInfo(photoId);
      } else {
        closeDialog();
      }
    }
  }, [location.pathname]);

  return (
    <section className="grid">
      {results.map((item) => (
        <GridItem
          key={uuidv4()}
          photo={item}
          openDialog={(e) => getPhotoInfo(e)}
        />
      ))}

      <Modal data={dialogOptions!} onClose={closeDialog} show={showDialog} />

      {loading && <div className="loading" />}
    </section>
  );
};

export default GridList;
