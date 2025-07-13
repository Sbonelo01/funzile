
interface FunzileLogoProps {
  size?: number;
  variant?: 'default' | 'white';
}

export const FunzileLogo = ({ size = 40, variant = 'default' }: FunzileLogoProps) => {
  const primaryColor = variant === 'white' ? '#ffffff' : '#2563eb';
  const secondaryColor = variant === 'white' ? '#e5e7eb' : '#7c3aed';
  
  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#gradient)"
          className="animate-pulse"
        />
        
        {/* Main "F" Shape */}
        <path
          d="M25 25 L25 75 L70 75 L70 65 L35 65 L35 55 L60 55 L60 45 L35 45 L35 35 L70 35 L70 25 Z"
          fill={variant === 'white' ? '#1e293b' : '#ffffff'}
          stroke={variant === 'white' ? '#ffffff' : primaryColor}
          strokeWidth="1"
        />
        
        {/* Decorative Elements */}
        <circle
          cx="75"
          cy="25"
          r="8"
          fill={secondaryColor}
          opacity="0.8"
        />
        
        <rect
          x="20"
          y="80"
          width="15"
          height="4"
          rx="2"
          fill={secondaryColor}
          opacity="0.6"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Subtle glow effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-20 blur-md"
        style={{
          background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`
        }}
      />
    </div>
  );
};
