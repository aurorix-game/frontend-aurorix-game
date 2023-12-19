import classes from '@/app/choose/styles.module.css';

export default async function IncomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={classes.main}>{children}</main>;
}
