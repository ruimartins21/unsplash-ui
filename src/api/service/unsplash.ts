import { api } from "..";
import { CONSTANTS } from "../../utils/constants";
import { PhotoResponse, PhotosResponse } from "../../types";

const getPhotos = async (page: number): Promise<PhotosResponse> => {
  const config = {
    params: {
      client_id: process.env.REACT_APP_API_KEY,
      page,
      per_page: 30,
    },
  };

  try {
    const response = await api.get(CONSTANTS.ENDPOINTS.PHOTOS, config);

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

const getPhoto = async (id: string): Promise<PhotoResponse> => {
  const config = {
    params: {
      client_id: process.env.REACT_APP_API_KEY,
    },
  };

  try {
    const response = await api.get(
      `${CONSTANTS.ENDPOINTS.PHOTOS}/${id}`,
      config
    );

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export { getPhotos, getPhoto };
