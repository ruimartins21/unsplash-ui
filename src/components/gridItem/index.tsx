import React from "react";
import type { FC } from "react";
import { Photo } from "../../types";
import Favorite from "../favorite";

import "./styles.scss";

type Props = {
  photo: Photo;
  openDialog: (el: string) => void;
};

const GridItem: FC<Props> = ({ photo, openDialog }) => {
  const open = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();

    openDialog(photo.id);
  };

  return (
    <div className="grid-item">
      <img
        src={photo.urls.small}
        className="image"
        alt="img1"
        onClick={(e) => open(e)}
        aria-hidden="true"
      />

      {photo.favorite != null && (
        <div className="favorite-btn">
          <Favorite item={photo} />
        </div>
      )}
    </div>
  );
};

export default GridItem;
