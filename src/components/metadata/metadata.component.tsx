import { metadata } from '@/config';
import { MetadataId } from '@/interfaces';
import { NoSsr } from '@mui/material';
import { useEffect } from 'react';

type Params = {
  id: MetadataId;
  children?: React.ReactNode;
  noSSR?: boolean;
};

export function Metadata(params: Params) {
  useEffect(() => {
    const mt = metadata[params.id];

    document.title = `Aurorix | ${mt.subTitle}`;
  }, [params]);

  return (
    <>
      {params?.children && params?.noSSR ? (
        <NoSsr>{params?.children}</NoSsr>
      ) : (
        params?.children
      )}
    </>
  );
}
