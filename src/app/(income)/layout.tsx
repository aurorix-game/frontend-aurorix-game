import classes from '@/app/(income)/styles.module.css';

export default function IncomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={classes.main}>
      {/* <div className={classes.pixel}>{children}</div> */}
      {children}
    </main>
  );
}
