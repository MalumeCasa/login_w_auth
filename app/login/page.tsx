import AuthForm from '@/components/AuthForm';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In - SecureApp',
  description: 'Sign in to your SecureApp account',
};

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Sign In
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access your secure dashboard with enterprise-grade encryption and 
            multi-factor authentication options
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AuthForm type="login" />
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                By signing in, you agree to our{' '}
                <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                  Terms of Service
                </Link>{' '}
                and acknowledge our{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Choose SecureApp?
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: 'Military-Grade Encryption',
                  description: 'All data encrypted with AES-256-GCM before storage',
                  icon: '🔐'
                },
                {
                  title: 'Zero-Knowledge Architecture',
                  description: 'We never have access to your unencrypted data',
                  icon: '🛡️'
                },
                {
                  title: 'Cross-Device Sync',
                  description: 'Access your account securely from any device',
                  icon: '📱'
                },
                {
                  title: '24/7 Security Monitoring',
                  description: 'Real-time threat detection and prevention',
                  icon: '👁️'
                }
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Security Tip:</strong> Always ensure you're on <strong>https://secureapp.com</strong> 
                and look for the lock icon in your browser's address bar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}