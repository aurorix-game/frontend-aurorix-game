import classes from '@/app/(income)/styles.module.css';

export default async function IncomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={classes.main}>{children}</main>;
}
