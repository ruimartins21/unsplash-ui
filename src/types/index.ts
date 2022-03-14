export interface Photo {
  alt_description?: string;
  created_at: string;
  description?: string;
  exif?: {
    make: string;
    model: string;
    name: string;
    aperture: string;
    exposure_time: string;
    focal_length: string;
    iso: string;
  };
  id: string;
  updated_at: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  user: {
    bio: string;
    first_name: string;
    id: string;
    last_name?: string;
    name: string;
    username: string;
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };
  };
  favourite: boolean;
}

export type PhotosResponse = {
  data: Photo[];
};

export type PhotoResponse = {
  data: Photo;
};

export interface IAction {
  type: string;
  photo: Photo;
}
