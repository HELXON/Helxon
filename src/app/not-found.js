export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist. Return to Helxon\'s homepage to explore our cybersecurity solutions and SOC-as-a-Service offerings.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        This route does not exist yet. Please check the URL or head back home.
      </p>
    </section>
  );
}

