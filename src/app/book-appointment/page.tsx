'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useRouter } from 'next/navigation';
import 'react-day-picker/dist/style.css';

export default function BookAppointmentPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [reason, setReason] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const disabledDays = [{ dayOfWeek: [0] }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    if (!selectedTime) {
      alert('Please select a time.');
      return;
    }
    console.log({
      firstName,
      lastName,
      email,
      contact,
      reason,
      selectedDate,
      selectedTime,
    });
    alert('Appointment booked successfully!');
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-4 md:px-10 py-4 z-20 
                         bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div
          className="text-3xl font-extrabold text-blue-600 font-sans cursor-pointer"
          onClick={() => router.push('/')}
        >
          WellGo
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button
            className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm md:text-base font-medium"
            onClick={() => router.push('/login')}
          >
            Sign In
          </button>
          <button
            className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-sm md:text-base shadow-md font-medium"
            onClick={() => router.push('/register')}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Form container - fit & center */}
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white/30 backdrop-blur-lg border border-white/30 shadow-xl p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Left: Personal Info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold mb-4 text-blue-700">Book an Appointment</h1>

            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Contact Number</label>
              <input
                type="tel"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Reason for Booking</label>
              <textarea
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          {/* Right: Date Picker + Time Picker */}
          <div className="flex flex-col items-center justify-center w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={disabledDays}
            />

            <select
              disabled={!selectedDate}
              className="mt-6 border border-gray-300 rounded px-4 py-2 bg-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-60"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">
                {selectedDate ? 'Select a time slot' : 'Select a date first'}
              </option>
              <option value="7:00 AM">7:00 AM</option>
              <option value="7:30 AM">7:30 AM</option>
              <option value="8:00 AM">8:00 AM</option>
              <option value="8:30 AM">8:30 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="9:30 AM">9:30 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="11:00 AM">11:00 AM</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition shadow-md"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
