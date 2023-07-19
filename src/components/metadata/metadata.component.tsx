import { useEffect } from 'react';

type Params = {
  title?: string;
  subTitle: string;
  children?: React.ReactNode;
};

export function Metadata(params: Params) {
  useEffect(() => {
    if (params?.title) document.title = params.title;
    if (params.subTitle) document.title = `Aurorix | ${params.subTitle}`;
  }, [params]);

  return <>{params?.children}</>;
}
