import { metadata } from '@/config';
import { MetadataId } from '@/interfaces';
import { useEffect } from 'react';

type Params = {
  id: MetadataId;
  children?: React.ReactNode;
};

export function Metadata(params: Params) {
  useEffect(() => {
    const mt = metadata[params.id];

    document.title = `Aurorix | ${mt.subTitle}`;
  }, [params]);

  return <>{params?.children}</>;
}
