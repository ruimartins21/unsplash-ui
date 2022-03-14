import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import "./styles.scss";

import { Photo } from "../../types";
import GridList from "../../components/gridList";
import { getPhotos } from "../../api/service/unsplash";

const Home = () => {
  const [results, setResults] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const storage = useSelector((state: RootStateOrAny) => state.favorites);

  const checkFavoritesPhotos = (data: Photo[]): Photo[] => {
    return data.map((element) => ({
      ...element,
      favorite: storage.findIndex((el: Photo) => el.id === element.id) > -1,
    }));
  };

  const fetchPhotos = async (pageNumber: number) => {
    setLoading(true);

    let localData: Photo[];
    const { data } = await getPhotos(pageNumber);

    if (data) {
      localData = checkFavoritesPhotos(data);

      let clone: Photo[] = [];
      clone = [...results, ...localData];

      setResults(clone);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !loading
    ) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchPhotos(page);
  }, [page]);

  useEffect(() => {
    const items = checkFavoritesPhotos(results);
    setResults(items);
  }, [storage]);

  return (
    <div className="container">
      {results && results.length > 0 && <GridList results={results} />}
      {loading && <div className="loading" />}
    </div>
  );
};

export default Home;
