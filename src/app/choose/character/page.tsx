'use client';

import { Metadata } from '@/components';
import { MetadataId } from '@/interfaces';

export default function ChooseCharacter() {
  return (
    <Metadata id={MetadataId.chooseCharacter} noSSR>
      <div>Choose Here</div>
    </Metadata>
  );
}
