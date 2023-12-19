'use client';

import { Header, Metadata } from '@/components';
import { MetadataId } from '@/interfaces';

export default function ChooseCharacter() {
  return (
    <Metadata id={MetadataId.chooseCharacter} noSSR>
      <Header title="Choose your initial character" />
    </Metadata>
  );
}
