import { useAppSelector } from '@/config';
import { Color } from '@/interfaces';
import { Grid } from '@mui/material';
import { Character } from 'aurorix-core';
import kaboom, { GameObj, KaboomCtx, PosComp, ScaleComp, SpriteComp } from 'kaboom';
import { useCallback, useEffect } from 'react';
import { Button } from '../button/button.component';
import { CharacterAttribute } from '../character-attribute/character-attribute.component';
import { useStyles } from './character-card.styles';

type CharGameObj = GameObj<SpriteComp | PosComp | ScaleComp>;

type Params = {
  character: Character.Model;
};

export function CharacterCard(params: Params) {
  const classes = useStyles();
  const { loading } = useAppSelector((state) => state.choose);

  const loadSprint = useCallback(
    (k: KaboomCtx) => {
      const sprite = params.character.sprite;

      k.loadSprite(params.character.alias_name, sprite.url, {
        sliceX: sprite.columns,
        sliceY: sprite.rows,
        anims: {
          down: { from: 0, to: 2, loop: true, speed: 6 },
        },
      });
    },
    [params.character.alias_name, params.character.sprite]
  );

  const addChar = useCallback(
    (k: KaboomCtx): CharGameObj => {
      return k.add([k.sprite(params.character.alias_name), k.pos(60, 50), k.scale(10)]);
    },
    [params.character.alias_name]
  );

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document.querySelector(
      `#${params.character.alias_name}`
    );

    if (canvas && !loading) {
      const k = kaboom({ canvas, background: '#301432' });
      loadSprint(k);
      const char = addChar(k);
      if (char) char.play('down');
    }
  }, [addChar, loadSprint, loading, params.character.alias_name]);

  return (
    <Grid container justifyContent="center" className={classes.grid}>
      <Grid container item justifyContent="center">
        <div className={classes.boxLeft}>
          <canvas
            id={params.character.alias_name}
            style={{ width: '100%', height: '100%' }}
            className={classes.hover}
          />
        </div>
        <div className={classes.boxRight}>
          {params.character.attributes.map((attribute, i) => (
            <CharacterAttribute attribute={attribute} key={i} />
          ))}
        </div>
      </Grid>
      <Grid container item justifyContent="center" style={{ marginTop: '1vh' }}>
        <Button
          label="confirm"
          type="submit"
          font={{ size: '2.5vh' }}
          button={{ color: Color.greenNeon, height: '65%' }}
        />
      </Grid>
    </Grid>
  );
}
