'use client'

import React from 'react';
import DownloadButton from './download-button';

const DownloadPage: React.FC = () => {
  const handleDownloadForWindows = () => {
    window.open('https://github.com/AYONX4/Inoxeia/releases/download/v1.0.7/inoxeia-1.0.7-setup.exe', '_blank');
  };

  const handleDownloadForLinux = () => {
    window.open('https://github.com/AYONX4/Inoxeia/releases/download/v1.0.7/inoxeia_1.0.7_amd64.deb', '_blank');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Inoxeia
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Download Inoxeia and experience the next generation of innovation. 
            Available for Windows and Linux platforms.
          </p>
        </div>

        {/* Download Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Choose Your Platform
            </h2>
            <p className="text-gray-400">
              Select your operating system to download Inoxeia
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <DownloadButton 
              platform="windows" 
              onClick={() => handleDownloadForWindows()}
            />
            <DownloadButton 
              platform="linux" 
              onClick={() => handleDownloadForLinux()}
            />
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                System Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">Windows</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Windows 10 or later</li>
                    <li>• 1GB RAM minimum</li>
                    <li>• 300MB free space</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">Linux</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Anything works</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
