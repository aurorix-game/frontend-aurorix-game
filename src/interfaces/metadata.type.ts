export type IMetadata = {
  subTitle: string | null;
  path: string;
};

export enum MetadataId {
  home = 'home',
  login = 'login',
  register = 'register',
  resetPassword = 'register-password',
  chooseCharacter = 'choose-character',
  chooseMopy = 'choose-mopy',
}

export type MetadataGroup = {
  [MetadataId.home]: IMetadata;
  [MetadataId.login]: IMetadata;
  [MetadataId.register]: IMetadata;
  [MetadataId.resetPassword]: IMetadata;
  [MetadataId.chooseCharacter]: IMetadata;
  [MetadataId.chooseMopy]: IMetadata;
};
