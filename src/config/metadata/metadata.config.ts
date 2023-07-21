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
};
