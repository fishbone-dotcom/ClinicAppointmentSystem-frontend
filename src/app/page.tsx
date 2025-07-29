'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800">
      <header className="w-full flex justify-between items-center px-4 md:px-10 py-4 z-20 
                         bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="text-3xl font-extrabold text-blue-600 font-sans">WellGo</div>
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

      <main className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between
                      px-4 md:px-10 py-6 md:py-0 relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left
                      w-full lg:w-2/5 xl:w-[45%] mt-8 md:mt-0 z-10 lg:pr-8 xl:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900 leading-tight">
            Your Clinic, One Tap Away
          </h1>
          <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-700 max-w-md">
            Book and manage clinic appointments instantly. Safe, reliable, and simple—anywhere in your city.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-0 w-full sm:w-auto">
            <button
              className="bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 text-base font-medium w-full sm:w-auto"
              onClick={() => router.push('/appointments')}
            >
              Book Appointment
            </button>
            <button
              className="border border-gray-300 text-gray-700 px-7 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 text-base font-medium w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="relative flex-shrink-0
                      w-full md:w-3/4 lg:w-3/5 xl:w-[55%]
                      h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]
                      mt-8 md:mt-0 pointer-events-none select-none">
          <Image
            src="/doctor-tablet-5.PNG"
            alt="Doctor with tablet showing online booking calendar"
            layout="fill"
            objectFit="contain"
            priority={true}
            className="drop-shadow-2xl"
          />
        </div>
      </main>
    </div>
  );
}
