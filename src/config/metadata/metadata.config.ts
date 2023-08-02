import { MetadataGroup, MetadataId } from '@/interfaces';

export const metadata: MetadataGroup = {
  [MetadataId.home]: {
    subTitle: null,
    path: '/',
    public: true,
  },
  [MetadataId.login]: {
    subTitle: 'Login',
    path: '/login',
    public: true,
  },
  [MetadataId.signup]: {
    subTitle: 'Signup',
    path: '/signup',
    public: true,
  },
  [MetadataId.resetPassword]: {
    subTitle: 'Reset password',
    path: '/reset-password',
    public: true,
  },
  [MetadataId.chooseCharacter]: {
    subTitle: 'Choose Character',
    path: '/choose/character',
    public: false,
  },
  [MetadataId.chooseMopy]: {
    subTitle: 'Choose Mopy',
    path: '/choose/mopy',
    public: false,
  },
};
