import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { services } from "../data";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.service) newErrors.service = "Please select a service.";
    if (!form.date) newErrors.date = "Please select a date.";
    if (!form.time) newErrors.time = "Please select a time.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/confirmation", { state: form });
    }
  };

  return (
    <PageContainer
      title="Book an Appointment"
      description="Complete the form below to request an appointment."
    >
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        {Object.keys(errors).length > 0 && (
          <div
            className="mb-6 border border-red-300 bg-red-50 text-red-800 rounded-lg p-4"
            role="alert"
            aria-live="polite"
          >
            <h3 className="font-semibold">Please fix the following issues:</h3>
            <ul className="list-disc pl-5 mt-2">
              {Object.values(errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label htmlFor="fullName" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />
            {errors.fullName && <p className="text-red-700 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />
            {errors.email && <p className="text-red-700 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />
            {errors.phone && <p className="text-red-700 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="service" className="block font-medium mb-1">
              Select Service
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.service && <p className="text-red-700 text-sm mt-1">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="date" className="block font-medium mb-1">
              Appointment Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />
            {errors.date && <p className="text-red-700 text-sm mt-1">{errors.date}</p>}
          </div>

          <fieldset>
            <legend className="block font-medium mb-2">Preferred Time</legend>
            <div className="flex flex-wrap gap-4">
              {["09:00 AM", "11:00 AM", "02:00 PM"].map((slot) => (
                <label key={slot} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="time"
                    value={slot}
                    checked={form.time === slot}
                    onChange={handleChange}
                  />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
            {errors.time && <p className="text-red-700 text-sm mt-1">{errors.time}</p>}
          </fieldset>

          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-800"
          >
            Submit Appointment Request
          </button>
        </form>
      </div>
    </PageContainer>
  );
}