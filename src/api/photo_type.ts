export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type Links = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type Links2 = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

export type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

export type Social = {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
};

export type User = {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
};

export type Exif = {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
};

export type Position = {
  latitude?: any;
  longitude?: any;
};

export type Location = {
  title: string;
  name: string;
  city?: any;
  country?: any;
  position: Position;
};

export type TopicSubmissions = {};

export type PhotoResponse = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: any;
  alt_description?: any;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  views: number;
  downloads: number;
};
