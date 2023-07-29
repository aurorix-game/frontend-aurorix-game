import { MetadataGroup, MetadataId } from '@/interfaces';

export const metadata: MetadataGroup = {
  [MetadataId.home]: {
    subTitle: null,
    path: '/',
  },
  [MetadataId.login]: {
    subTitle: 'Login',
    path: '/login',
  },
  [MetadataId.register]: {
    subTitle: 'Register',
    path: '/register',
  },
  [MetadataId.resetPassword]: {
    subTitle: 'Reset password',
    path: '/reset-password',
  },
  [MetadataId.chooseCharacter]: {
    subTitle: 'Choose Character',
    path: '/choose/character',
  },
  [MetadataId.chooseMopy]: {
    subTitle: 'Choose Mopy',
    path: '/choose/mopy',
  },
};
