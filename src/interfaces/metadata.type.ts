export type IMetadata = {
  subTitle: string | null;
  path: string;
  public: boolean;
};

export enum MetadataId {
  home = 'home',
  login = 'login',
  signup = 'signup',
  resetPassword = 'reset-password',
  chooseCharacter = 'choose-character',
  chooseMopy = 'choose-mopy',
}

export type MetadataGroup = {
  [MetadataId.home]: IMetadata;
  [MetadataId.login]: IMetadata;
  [MetadataId.signup]: IMetadata;
  [MetadataId.resetPassword]: IMetadata;
  [MetadataId.chooseCharacter]: IMetadata;
  [MetadataId.chooseMopy]: IMetadata;
};
