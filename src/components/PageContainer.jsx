export default function PageContainer({ title, description, children }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        {description && <p className="mt-2 text-slate-600 max-w-3xl">{description}</p>}
      </header>
      {children}
    </section>
  );
}