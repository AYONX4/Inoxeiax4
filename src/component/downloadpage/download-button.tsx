import React from 'react';
import { Download, Monitor, Laptop } from 'lucide-react';

interface DownloadButtonProps {
  platform: 'windows' | 'linux';
  onClick?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ platform, onClick }) => {
  const isWindows = platform === 'windows';
  
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 w-full max-w-sm"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
        {isWindows ? (
          <Monitor className="w-6 h-6 text-white" />
        ) : (
          <Laptop className="w-6 h-6 text-white" />
        )}
      </div>
      
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-white">
            {isWindows ? 'Windows' : 'Linux'}
          </h3>
          <Download className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
        </div>

      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default DownloadButton;