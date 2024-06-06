export default function DashboardLayout({
  children,
  userAnalytics,
  revenue,
  notifs,
  Login,
}: {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  revenue: React.ReactNode;
  notifs: React.ReactNode;
  Login: React.ReactNode;
}) {
  const isLoggedin = true;
  return isLoggedin ? (
    <div>
      <div>{children}</div>
      <div>{userAnalytics}</div>
      <div>{revenue}</div>
      <div>{notifs}</div>
    </div>
  ) : (
      Login 
  );
}
