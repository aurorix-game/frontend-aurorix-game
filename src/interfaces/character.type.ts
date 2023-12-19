import { TypeValues } from './type-values.type';

export namespace Character {
  export type Sprite = {
    url: string;
    columns: number;
    rows: number;
  };

  export enum TypeAttributes {
    MOPY_CAPTURE = 'mopy-capture',
    EXPERTISE = 'expertise',
    ELEMENT_TUNNING = 'element-tunning',
  }

  export type Attribute = {
    label: string;
    type_value: TypeValues;
    value: number;
    style: {
      color: string;
      icon: string;
    };
  };

  export type Model = {
    id: string;
    alias_name: string;
    sprite: Sprite;
    attributes: Attribute[];
  };
}
