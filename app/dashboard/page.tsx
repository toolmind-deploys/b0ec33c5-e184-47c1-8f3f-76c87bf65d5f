async function DashboardPage() {
  // Fetch data from our API endpoint
  const res = await fetch('http://localhost:3000/api/dashboard', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <p className="text-center mt-4">{data.message}</p>
    </div>
  );
}

export default DashboardPage;