'use client';

import { useStyles } from '@/app/page.styles';
import '@/styles/global.css';

export default function Home() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.blur}></div>
    </main>
  );
}
