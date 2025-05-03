"use client"
import { useState } from 'react';

import { 
  ChevronRight, 
  Award, 
  Calendar, 
  ShoppingBag, 
  Users, 
  Clock, 
  CheckCircle, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  DollarSign,
  ArrowRight
} from 'lucide-react';

export default function FitnessLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('membership');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">FitLife</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <a href="#" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md font-medium">Home</a>
                  <a href="#programs" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">Programs</a>
                  <a href="#testimonials" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">Testimonials</a>
                  <a href="#trainers" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">Trainers</a>
                  <a href="#shop" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">Shop</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
                Join Now
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-green-600">Home</a>
              <a href="#programs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">Programs</a>
              <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">Testimonials</a>
              <a href="#trainers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">Trainers</a>
              <a href="#shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">Shop</a>
              <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-green-500 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Body, <br />
              <span className="text-yellow-300">Transform Your Life</span>
            </h1>
            <p className="mt-4 text-xl text-white opacity-90">
              Expert-guided fitness programs and nutrition plans tailored to your unique goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-green-700 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                Try Free For 7 Days <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-green-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-96 sm:h-auto rounded-lg overflow-hidden">
                
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex ml-4 items-center">
                  <div className="bg-green-100 rounded-full p-3">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Trusted by</p>
                    <p className="text-lg font-bold text-gray-900">10,000+ members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose FitLife?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We blend science-backed training with personalized nutrition guidance to deliver results that last.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-green-100 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Expert Trainers</h3>
              <p className="mt-2 text-gray-600">
                Our certified fitness professionals create custom plans for your unique body and goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-green-100 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Flexible Scheduling</h3>
              <p className="mt-2 text-gray-600">
                Book sessions that fit your schedule with our easy-to-use mobile app.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
              <div className="bg-green-100 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Nutrition Shop</h3>
              <p className="mt-2 text-gray-600">
                Access premium supplements and meal plans to fuel your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Programs</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of specialized programs designed to meet your unique fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative">
                <img
                 src="/1.jpg"
                 alt="Weight Loss Program" 
                 className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weight Loss Program</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive program combining HIIT, strength training, and nutrition coaching.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" /> 12 weeks
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" /> 2,500+ members
                  </span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-300 flex items-center justify-center">
                  Learn More <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative">
                <img
                 src="/2.jpg"
                  alt="Muscle Building" 
                  className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Muscle Building</h3>
                <p className="text-gray-600 mb-4">
                  Progressive overload training with targeted nutrition for maximum muscle growth.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" /> 16 weeks
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" /> 1,800+ members
                  </span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-300 flex items-center justify-center">
                  Learn More <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative">
                <img 
                src="/3.jpg"
                 alt="Yoga & Wellness" 
                 className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yoga & Wellness</h3>
                <p className="text-gray-600 mb-4">
                  Mind-body connection training with flexibility, meditation and holistic nutrition.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" /> 8 weeks
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" /> 3,200+ members
                  </span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-300 flex items-center justify-center">
                  Learn More <ChevronRight className="ml-1 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign-up Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">Start Your Fitness Journey Today</h2>
                <p className="text-green-100 text-lg mb-6">
                  Choose the membership plan that fits your lifestyle and goals.
                </p>
                
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex flex-wrap border-b border-gray-200">
                    <button 
                      className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'membership' ? 'bg-green-100 text-green-700 border-b-2 border-green-600' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('membership')}
                    >
                      Membership
                    </button>
                    <button 
                      className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === 'training' ? 'bg-green-100 text-green-700 border-b-2 border-green-600' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('training')}
                    >
                      Personal Training
                    </button>
                  </div>
                  
                  {activeTab === 'membership' && (
                    <div className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Basic Plan */}
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                          <h3 className="text-lg font-bold text-gray-900">Basic</h3>
                          <p className="mt-1 text-gray-500 text-sm">Perfect for beginners</p>
                          <div className="mt-4 flex items-baseline">
                            <span className="text-2xl font-bold text-gray-900">$29</span>
                            <span className="ml-1 text-gray-500">/month</span>
                          </div>
                          <ul className="mt-6 space-y-3">
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Gym access</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Group classes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Basic meal plans</span>
                            </li>
                          </ul>
                          <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded font-medium">
                            Select Plan
                          </button>
                        </div>

                        {/* Pro Plan */}
                        <div className="border-2 border-green-500 rounded-lg p-6 shadow-md relative">
                          <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Most Popular
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">Pro</h3>
                          <p className="mt-1 text-gray-500 text-sm">For serious fitness enthusiasts</p>
                          <div className="mt-4 flex items-baseline">
                            <span className="text-2xl font-bold text-gray-900">$59</span>
                            <span className="ml-1 text-gray-500">/month</span>
                          </div>
                          <ul className="mt-6 space-y-3">
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">All Basic features</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">1 PT session/month</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Personalized workout plan</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Nutrition consultation</span>
                            </li>
                          </ul>
                          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium">
                            Select Plan
                          </button>
                        </div>

                        {/* Elite Plan */}
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                          <h3 className="text-lg font-bold text-gray-900">Elite</h3>
                          <p className="mt-1 text-gray-500 text-sm">Ultimate transformation</p>
                          <div className="mt-4 flex items-baseline">
                            <span className="text-2xl font-bold text-gray-900">$99</span>
                            <span className="ml-1 text-gray-500">/month</span>
                          </div>
                          <ul className="mt-6 space-y-3">
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">All Pro features</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Weekly PT sessions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Premium supplement kit</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">Priority booking</span>
                            </li>
                          </ul>
                          <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded font-medium">
                            Select Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'training' && (
                    <div className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                          <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-full">
                              <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="ml-3 text-lg font-bold text-gray-900">1-on-1 Training</h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            Personalized attention and custom workouts with your dedicated trainer.
                          </p>
                          <div className="mb-4">
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="text-gray-900 font-medium">From $75 per session</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <Clock className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="text-gray-900 font-medium">60 minute sessions</span>
                            </div>
                          </div>
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium">
                            Book a Session
                          </button>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                          <div className="flex items-center mb-4">
                            <div className="bg-green-100 p-3 rounded-full">
                              <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="ml-3 text-lg font-bold text-gray-900">Partner Training</h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            Train with a friend or partner for motivation and shared success.
                          </p>
                          <div className="mb-4">
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="text-gray-900 font-medium">From $110 per session</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <Clock className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="text-gray-900 font-medium">60 minute sessions</span>
                            </div>
                          </div>
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium">
                            Book a Session
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <img
                    src="/4.jpg"
                    alt="Fitness transformation"
                    className="rounded-lg mt-4 shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 p-3 rounded-lg shadow-lg">
                    <div className="text-center">
                      <p className="font-bold text-gray-800">Free Trial</p>
                      <p className="text-sm text-gray-700">7 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our members who have transformed their bodies and lives with FitLife.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="11.jpg" alt="Sarah J." className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Sarah J.</h4>
                  <p className="text-sm text-gray-500">Lost 35 lbs in 4 months</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The personalized nutrition plan was a game-changer for me. I've tried many diets before, but nothing was sustainable until I joined FitLife."
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">4 months ago</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="/11.jpg" alt="Michael T." className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Michael T.</h4>
                  <p className="text-sm text-gray-500">Gained 12 lbs muscle in 3 months</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The trainers at FitLife really know their stuff. My strength has doubled and I've finally achieved the physique I've been working towards for years."
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">2 months ago</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img src="/11.jpg" alt="Jessica K." className="h-12 w-12 rounded-full" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Jessica K.</h4>
                  <p className="text-sm text-gray-500">Transformed overall health</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Beyond just physical changes, the holistic approach at FitLife helped me sleep better, reduce stress, and gain incredible energy. Best decision I ever made!"
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">1 month ago</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-md font-bold hover:bg-green-600 hover:text-white transition duration-300 inline-flex items-center">
              View More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Trainers Section */}
      <div id="trainers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Trainers</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified fitness professionals are passionate about helping you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trainer 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden text-center hover:shadow-lg transition duration-300">
              <div className="relative">
                <img src="/7.jpg" alt="Alex Johnson" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Alex Johnson</h3>
                  <p className="text-green-300">Strength & Conditioning</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Specializes in functional training and athletic performance with 10+ years experience.
                </p>
                <button className="mt-4 bg-transparent border border-green-600 text-green-600 px-4 py-2 rounded text-sm font-medium hover:bg-green-600 hover:text-white transition duration-300">
                  Book Session
                </button>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden text-center hover:shadow-lg transition duration-300">
              <div className="relative">
                <img src="/11.jpg" alt="Sophia Lee" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Sophia Lee</h3>
                  <p className="text-green-300">Nutrition & Weight Loss</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Certified nutritionist specializing in sustainable weight management and metabolic health.
                </p>
                <button className="mt-4 bg-transparent border border-green-600 text-green-600 px-4 py-2 rounded text-sm font-medium hover:bg-green-600 hover:text-white transition duration-300">
                  Book Session
                </button>
              </div>
            </div>

            {/* Trainer 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden text-center hover:shadow-lg transition duration-300">
              <div className="relative">
                <img src="/8.jpg" alt="Marcus Williams" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Marcus Williams</h3>
                  <p className="text-green-300">Bodybuilding Coach</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Former competitive bodybuilder with expertise in muscle development and aesthetic physique.
                </p>
                <button className="mt-4 bg-transparent border border-green-600 text-green-600 px-4 py-2 rounded text-sm font-medium hover:bg-green-600 hover:text-white transition duration-300">
                  Book Session
                </button>
              </div>
            </div>

            {/* Trainer 4 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden text-center hover:shadow-lg transition duration-300">
              <div className="relative">
                <img src="/10.jpg" alt="Emma Rodriguez" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">Emma Rodriguez</h3>
                  <p className="text-green-300">Yoga & Mindfulness</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">
                  Experienced yoga instructor focused on mind-body connection and stress management.
                </p>
                <button className="mt-4 bg-transparent border border-green-600 text-green-600 px-4 py-2 rounded text-sm font-medium hover:bg-green-600 hover:text-white transition duration-300">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <div id="shop" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Shop Nutrition</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Premium supplements and nutrition products to fuel your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
              <div className="p-4">
                <img src="/6.jpg" alt="Premium Protein" className="w-full h-48 object-contain" />
              </div>
              <div className="p-4 border-t">
                <h3 className="font-bold text-gray-900">Premium Whey Protein</h3>
                <p className="text-sm text-gray-600 mt-1">Grass-fed, hormone-free protein powder</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-green-600">$49.99</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
              <div className="p-4">
                <img src="/5.jpeg" alt="BCAA Supplement" className="w-full h-48 object-contain" />
              </div>
              <div className="p-4 border-t">
                <h3 className="font-bold text-gray-900">BCAA Complex</h3>
                <p className="text-sm text-gray-600 mt-1">Recovery & muscle preservation formula</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-green-600">$34.99</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
              <div className="p-4">
                <img src="/6.jpg" alt="Pre-Workout" className="w-full h-48 object-contain" />
              </div>
              <div className="p-4 border-t">
                <h3 className="font-bold text-gray-900">Advanced Pre-Workout</h3>
                <p className="text-sm text-gray-600 mt-1">Energy, focus & pump enhancer</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-green-600">$39.99</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
              <div className="p-4">
                <img src="/5.jpeg" alt="Meal Replacement" className="w-full h-48 object-contain" />
              </div>
              <div className="p-4 border-t">
                <h3 className="font-bold text-gray-900">Complete Meal Shake</h3>
                <p className="text-sm text-gray-600 mt-1">Balanced nutrition on the go</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-bold text-green-600">$44.99</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-md font-bold hover:bg-green-600 hover:text-white transition duration-300 inline-flex items-center">
              Browse All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Free Trial CTA */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Start Your Free 7-Day Trial Today</h2>
                <p className="text-green-100 text-lg mb-8">
                  Experience the difference with no commitment. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-bold transition duration-300">
                    Claim Your Free Trial
                  </button>
                </div>
                <p className="mt-4 text-green-100 text-sm">
                  No credit card required. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FitLife</h3>
              <p className="text-gray-400 mb-4">
                Transforming bodies and lives through science-backed fitness and nutrition.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Weight Loss</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Muscle Building</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Yoga & Wellness</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sports Performance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Senior Fitness</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Fitness Street</li>
                <li>Wellness City, WC 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@fitlife.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 FitLife. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}