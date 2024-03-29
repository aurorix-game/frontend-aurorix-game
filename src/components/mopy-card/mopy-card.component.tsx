import { Button } from '@/components';
import { AppDispatch, useAppSelector } from '@/config';
import { Color } from '@/interfaces';
import { chooseMopy } from '@/state/choose/actions';
import { Grid } from '@mui/material';
import { ICONS_ELEMENTS, InitialMopys, Mopy } from 'aurorix-core';
import kaboom, { GameObj, KaboomCtx, PosComp, ScaleComp, SpriteComp } from 'kaboom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './mopy-card.styles';

type CharGameObj = GameObj<SpriteComp | PosComp | ScaleComp>;

type Params = {
  mopy: Mopy.Model;
};

export function MopyCard(params: Params) {
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const { loading } = useAppSelector((state) => state.choose);

  const loadSprint = useCallback(
    (k: KaboomCtx) => {
      const sprite = params.mopy.sprite;

      k.loadSprite(params.mopy.alias_name, sprite.url, {
        sliceX: sprite.columns,
        sliceY: sprite.rows,
        anims: {
          down: { from: 0, to: 2, loop: true, speed: 6 },
        },
      });
    },
    [params.mopy.alias_name, params.mopy.sprite]
  );

  const addChar = useCallback(
    (k: KaboomCtx): CharGameObj => {
      return k.add([k.sprite(params.mopy.alias_name), k.pos(45, 35), k.scale(10)]);
    },
    [params.mopy.alias_name]
  );

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document?.querySelector(
      `#canvas-${params.mopy.alias_name}`
    );

    if (canvas && !loading) {
      const k = kaboom({ canvas, background: '#301432' });
      loadSprint(k);
      const char = addChar(k);
      if (char) char.play('down');
    }
  }, [addChar, loadSprint, loading, params.mopy.alias_name]);

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
      <Grid container item justifyContent="center" className={classes.gridMopy}>
        <div className={classes.container}>
          <div className={classes.boxTop}>
            <Grid container justifyContent="space-between" alignItems="center">
              <span className={classes.mopyLabel}>{params.mopy.alias_name}</span>
              <div>
                <Grid container alignItems="center">
                  <span className={classes.mopyLevel}>Lv. {params.mopy.att.level.value}</span>
                  <img
                    src={`${ICONS_ELEMENTS[params.mopy.att.elements[0]].icon}`}
                    alt="icon"
                    style={{ width: '2vh', height: '2vh' }}
                  />
                </Grid>
              </div>
            </Grid>
          </div>
          <div className={classes.boxLeft}>
            <canvas
              id={`canvas-${params.mopy.alias_name}`}
              style={{ width: '100%', height: '100%' }}
              className={classes.hover}
            />
          </div>
          <div className={classes.boxRight}>
            <Grid container style={{ height: '100%' }}>
              <Grid
                container
                item
                className={classes.mopyAttArea}
                xs={6}
                alignContent="space-around"
              >
                <span className={classes.mopyAttLabel}>HP</span>
                <span className={classes.mopyAttLabel}>ATTACK</span>
                <span className={classes.mopyAttLabel}>DEFENSE</span>
                <span className={classes.mopyAttLabel}>ELEMENT</span>
                <span className={classes.mopyAttLabel}>EXP</span>
              </Grid>
              <Grid container item style={{ height: '100%' }} xs={6} alignContent="space-around">
                <span className={classes.mopyAttLabel}>
                  <div className={classes.hp}>
                    {params.mopy.att.health.current_value} / {params.mopy.att.health.max_value}
                  </div>
                </span>
                <span className={classes.mopyAttLabel}>
                  <div className={classes.attack}>{params.mopy.att.attack.value}</div>
                </span>
                <span className={classes.mopyAttLabel}>
                  <div className={classes.defense}>{params.mopy.att.defense.value}</div>
                </span>
                <span className={classes.mopyAttLabel}>
                  <div className={classes.element}>{params.mopy.att.elements[0]}</div>
                </span>
                <span className={classes.mopyAttLabel}>
                  <div className={classes.exp}>
                    {params.mopy.att.xp.current_value} / {params.mopy.att.xp.max_value}
                  </div>
                </span>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid container item justifyContent="center" className={classes.gridConfirm}>
        {showConfirm && (
          <Button
            label="confirm"
            type="submit"
            font={{ size: '2.5vh' }}
            button={{ color: Color.greenNeon, height: '65%' }}
            onClick={() => dispatch(chooseMopy(params.mopy.alias_name as InitialMopys))}
          />
        )}
      </Grid>
    </Grid>
  );
}
