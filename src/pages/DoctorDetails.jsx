import { Link, useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { services } from "../data";

export default function DoctorDetails() {
  const { id } = useParams();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <PageContainer title="Service not found">
        <p className="text-slate-700">The requested service could not be found.</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title={service.title}
      description="Service and doctor details for appointment booking."
    >
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-3">{service.doctor}</h3>
        <p className="text-slate-700 mb-2">
          <span className="font-medium">Department:</span> {service.department}
        </p>
        <p className="text-slate-700 mb-4">{service.description}</p>

        <h4 className="font-semibold mb-2">Required documents</h4>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          {service.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-6">
          <Link
            to="/book"
            className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}