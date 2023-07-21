export type IMetadata = {
  subTitle: string | null;
  path: string;
};

export enum MetadataId {
  home = 'home',
  login = 'login',
  register = 'register',
  resetPassword = 'register-password',
}

export type MetadataGroup = {
  [MetadataId.home]: IMetadata;
  [MetadataId.login]: IMetadata;
  [MetadataId.register]: IMetadata;
  [MetadataId.resetPassword]: IMetadata;
};
