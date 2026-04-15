import { Link, useLocation } from "react-router-dom";
import PageContainer from "../components/PageContainer";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <PageContainer
      title="Appointment Confirmed"
      description="Your appointment request has been submitted successfully."
    >
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm max-w-2xl">
        <p className="text-slate-700 mb-4">
          Thank you. Your appointment request has been recorded.
        </p>

        {state && (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
            <p><span className="font-medium">Name:</span> {state.fullName}</p>
            <p><span className="font-medium">Email:</span> {state.email}</p>
            <p><span className="font-medium">Phone:</span> {state.phone}</p>
            <p><span className="font-medium">Service:</span> {state.service}</p>
            <p><span className="font-medium">Date:</span> {state.date}</p>
            <p><span className="font-medium">Time:</span> {state.time}</p>
          </div>
        )}

        <Link
          to="/"
          className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800"
        >
          Back to Home
        </Link>
      </div>
    </PageContainer>
  );
}