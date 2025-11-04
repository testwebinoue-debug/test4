import { useState } from 'react';

function HamburgerIcon() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60px]">
      <div className="absolute bottom-[-2.5%] left-0 right-0 top-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 21">
          <g id="Group 7">
            <path d="M0 0.5H60" id="Vector 1" stroke="var(--stroke-0, black)" />
            <path d="M10 10.5H60" id="Vector 2" stroke="var(--stroke-0, black)" />
            <path d="M20 20.5H60" id="Vector 3" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="h-[25px] relative shrink-0 w-[50px]">
      <div className="absolute inset-[-0.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 26">
          <g id="Group 9">
            <path d="M0.396484 0.544922L50.6035 25.4551" id="Vector 4" stroke="var(--stroke-0, black)" />
            <path d="M0.396484 25.4551L50.6035 0.544922" id="Vector 5" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface NavigationItem {
  label: string;
  path: string;
  hash: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'HOME', path: '/', hash: 'home_frame' },
  { label: 'ABOUT', path: '/', hash: 'text2' },
  { label: 'COMPANY INFO', path: '/', hash: 'text4' },
  { label: 'PHILOSOPHY', path: '/works', hash: 'philosophy_text' },
  { label: 'WORKS', path: '/works', hash: 'main_frame3-1_text' },
  { label: 'CONTACT', path: '/contact', hash: 'main_frame3-1_text' }
];

interface NavigationItemsProps {
  isMobile?: boolean;
  onNavigate: (path: string, hash?: string) => void;
}

export function NavigationItems({ isMobile = false, onNavigate }: NavigationItemsProps) {
  return (
    <>
      {navigationItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavigate(item.path, item.hash)}
          className="box-border cursor-pointer overflow-visible p-0 content-stretch flex gap-[20px] items-start relative shrink-0 hover:opacity-70 transition-opacity"
        >
          <p className={`font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-black text-nowrap whitespace-pre ${isMobile ? 'text-[14px]' : 'text-[16px]'}`}>
            {item.label}
          </p>
        </button>
      ))}
    </>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string, hash?: string) => void;
}

function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const handleClick = (path: string, hash?: string) => {
    onClose();
    onNavigate(path, hash);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#f9f9f9] z-40 lg:hidden overflow-y-auto">
      <div className="h-[120px] relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex h-[120px] items-center justify-end px-[25px] md:px-[50px] py-[45px] relative w-full">
            <button 
              onClick={onClose}
              className="content-stretch flex gap-[10px] h-[30px] items-center justify-end relative shrink-0 w-full"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
      
      <div className="box-border grid grid-cols-3 md:grid-cols-2 gap-x-[15px] gap-y-[40px] md:gap-x-[50px] md:gap-y-[50px] items-start px-[25px] md:px-[50px] py-[25px]">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.path, item.hash)}
            className="content-stretch flex gap-[20px] items-start relative justify-start text-left hover:opacity-70 transition-opacity"
          >
            <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] md:text-[16px] text-black text-nowrap whitespace-pre">
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

interface HeaderProps {
  onNavigate: (path: string, hash?: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden lg:block h-[123px] relative shrink-0 w-full">
        <div className="absolute box-border content-stretch flex gap-[75px] items-center justify-end overflow-clip px-[100px] py-[50px] right-0 top-0 w-full">
          <NavigationItems onNavigate={onNavigate} />
        </div>
      </div>

      {/* Tablet/Mobile Header */}
      <div className={`lg:hidden ${isMenuOpen ? 'bg-[#f9f9f9]' : 'bg-white'} relative shrink-0 w-full z-50`}>
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="box-border content-stretch flex items-center justify-end px-[25px] md:px-[50px] py-[45px] relative w-full">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="basis-0 content-stretch flex grow h-[30px] items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0"
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={onNavigate} />
    </>
  );
}
