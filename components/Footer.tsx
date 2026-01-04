import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  DevicePhoneMobileIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-blue-600 text-lg">SA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SecureApp</h3>
                <p className="text-sm text-gray-400">Professional Security</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Enterprise-grade authentication and security solutions for modern web applications.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Features */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Security Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <LockClosedIcon className="h-5 w-5 text-blue-500" />
                <span>End-to-End Encryption</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                <span>Two-Factor Authentication</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <DevicePhoneMobileIcon className="h-5 w-5 text-purple-500" />
                <span>Cross-Device Sync</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <GlobeAltIcon className="h-5 w-5 text-cyan-500" />
                <span>Global CDN Protection</span>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & Legal</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Support Email</p>
                <a
                  href={`mailto:${process.env.SUPPORT_EMAIL || 'support@secureapp.com'}`}
                  className="text-blue-400 hover:text-blue-300"
                >
                  {process.env.SUPPORT_EMAIL || 'support@secureapp.com'}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Emergency Support</p>
                <p className="text-blue-400">24/7 Available</p>
              </div>
              <div className="pt-4 border-t border-gray-800">
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white mr-4"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {process.env.COMPANY_NAME || 'SecureApp'}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-xs text-gray-500">
                v{process.env.APP_VERSION || '1.0.0'}
              </span>
              <span className="text-xs px-3 py-1 bg-green-900/30 text-green-400 rounded-full">
                🔒 Secured by AES-256-GCM
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}