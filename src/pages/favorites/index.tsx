import { RootStateOrAny, useSelector } from "react-redux";

import "./styles.scss";

import GridList from "../../components/gridList";
import favorite from "../../assets/favorite.svg";

const Favorites = () => {
  const results = useSelector((state: RootStateOrAny) => state.favorites);

  return (
    <div className="container">
      {results && results.length > 0 && <GridList results={results} />}

      {results.length === 0 && (
        <div className="not-found">
          <img src={favorite} alt="No Favorites" />
          <h2>You don&apos;t have any favorites photos yet.</h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;
