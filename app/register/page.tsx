import AuthForm from '@/components/AuthForm';
import { Metadata } from 'next';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Create Account - SecureApp',
  description: 'Join thousands of users who trust our security',
};

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join SecureApp Today
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience enterprise-level security with our end-to-end encrypted platform. 
            Trusted by businesses and individuals worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Create Your Account
                </h2>
                <p className="text-gray-600">
                  Fill in your details to get started. All fields are encrypted before storage.
                </p>
              </div>
              
              <AuthForm type="register" />
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Already have an account?{' '}
                  <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign in here
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="space-y-8">
            {/* Security Badge */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircleIcon className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Verified Secure</h3>
                  <p className="text-sm text-gray-600">ISO 27001 Certified</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Our security protocols are independently verified and certified to the highest standards.
              </p>
            </div>

            {/* Benefits List */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">
                What You Get
              </h3>
              <ul className="space-y-4">
                {[
                  'End-to-end encrypted storage',
                  'Multi-factor authentication',
                  'Unlimited secure sessions',
                  'Priority customer support',
                  'Advanced security analytics',
                  'Regular security audits'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Trusted By
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">256-bit</div>
                  <div className="text-sm text-gray-600">Encryption</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Your Security is Our Priority</h3>
              <p className="text-gray-300">
                We employ multiple layers of security including end-to-end encryption, regular security audits, 
                and compliance with global data protection regulations. Your data never leaves our servers unencrypted, 
                and we never store plain text passwords.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}