import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { services } from "../data";

export default function Services() {
  return (
    <PageContainer
      title="Our Services"
      description="Browse available healthcare services and view details before booking."
    >
      <div className="grid gap-4">
        {services.map((service) => (
          <article
            key={service.id}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-slate-600">{service.description}</p>
            <p className="mt-2 text-sm text-slate-700">
              <span className="font-medium">Doctor:</span> {service.doctor}
            </p>
            <div className="mt-4">
              <Link
                to={`/services/${service.id}`}
                className="inline-block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}