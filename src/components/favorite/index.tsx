import type { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles.scss";
import { Photo } from "../../types";
import icon from "../../assets/favorite.svg";

type Props = {
  item: Photo;
  visible?: boolean;
};

const Favorite: FC<Props> = ({ item, visible }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(item.favorite);
  const dispatch = useDispatch();

  const onFavorite = () => {
    const favoriteItem = { ...item, favorite: true };

    if (isFavorite) {
      dispatch({ type: "DEL_FAV", photo: favoriteItem });
    } else {
      dispatch({ type: "ADD_FAV", photo: favoriteItem });
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <button
      type="button"
      data-testid="fav-btn"
      className={`favorite ${isFavorite ? "active" : ""} ${
        visible ? "visible" : ""
      }`}
      onClick={onFavorite}
    >
      <img src={icon} alt="Favorite" />
      <span>{isFavorite ? "Unlike" : "Like"}</span>
    </button>
  );
};

Favorite.defaultProps = {
  visible: false,
};

export default Favorite;
