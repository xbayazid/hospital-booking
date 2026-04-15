import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

export default function Home() {
  return (
    <PageContainer
      title="Book healthcare appointments easily"
      description="This prototype is designed to demonstrate accessible and usable web interaction for a community health appointment booking service."
    >
      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-semibold mb-3">Why use this service?</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Simple and clear navigation</li>
            <li>Accessible appointment booking form</li>
            <li>Readable layout and keyboard-friendly interaction</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="bg-blue-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-800"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="bg-white border border-slate-300 text-slate-800 px-5 py-3 rounded-lg font-medium hover:bg-slate-50"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-lg">Find a Doctor</h3>
            <p className="mt-2 text-slate-600">Browse available departments and doctors.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-lg">Book a Service</h3>
            <p className="mt-2 text-slate-600">Choose a service, date, and time slot.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-lg">Accessible Design</h3>
            <p className="mt-2 text-slate-600">Clear labels, contrast, and keyboard support.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-lg">Support Information</h3>
            <p className="mt-2 text-slate-600">Accessibility help is available on a dedicated page.</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}