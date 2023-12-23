import { Button, CharacterAttribute } from '@/components';
import { AppDispatch, useAppSelector } from '@/config';
import { Color } from '@/interfaces';
import { chooseCharacter } from '@/state/choose/actions';
import { Grid } from '@mui/material';
import { Character, InitialCharacters } from 'aurorix-core';
import kaboom, { GameObj, KaboomCtx, PosComp, ScaleComp, SpriteComp } from 'kaboom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './character-card.styles';

type CharGameObj = GameObj<SpriteComp | PosComp | ScaleComp>;

type Params = {
  character: Character.Model;
};

export function CharacterCard(params: Params) {
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
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

  function closeConfirm() {
    setTimeout(() => {
      setShowConfirm(false);
    }, 700);
  }

  return (
    <Grid
      container
      justifyContent="center"
      className={classes.grid}
      onClick={() => setShowConfirm(true)}
      onMouseLeave={closeConfirm}
    >
      <Grid container item justifyContent="center" className={classes.gridCharacter}>
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
      <Grid container item justifyContent="center" className={classes.gridConfirm}>
        {showConfirm && (
          <Button
            label="confirm"
            type="submit"
            font={{ size: '2.5vh' }}
            button={{ color: Color.greenNeon, height: '65%' }}
            onClick={() =>
              dispatch(chooseCharacter(params.character.alias_name as InitialCharacters))
            }
          />
        )}
      </Grid>
    </Grid>
  );
}
