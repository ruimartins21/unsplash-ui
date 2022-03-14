import type { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./styles.scss";
import { Photo } from "../../types";
import icon from "../../assets/favourite.svg";

type Props = {
  item: Photo;
  visible?: boolean;
};

const Favourite: FC<Props> = ({ item, visible }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(item.favourite);
  const dispatch = useDispatch();

  const onFavourite = () => {
    const favouriteItem = { ...item, favourite: true };

    if (isFavourite) {
      dispatch({ type: "DEL_FAV", photo: favouriteItem });
    } else {
      dispatch({ type: "ADD_FAV", photo: favouriteItem });
    }

    setIsFavourite(!isFavourite);
  };

  return (
    <button
      type="button"
      data-testid="fav-btn"
      className={`favourite ${isFavourite ? "active" : ""} ${
        visible ? "visible" : ""
      }`}
      onClick={onFavourite}
    >
      <img src={icon} alt="Favourite" />
      <span>{isFavourite ? "Unlike" : "Like"}</span>
    </button>
  );
};

Favourite.defaultProps = {
  visible: false,
};

export default Favourite;
