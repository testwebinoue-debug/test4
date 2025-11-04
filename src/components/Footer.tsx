import { NavigationItems } from './Header';

interface FooterProps {
  onNavigate: (path: string, hash?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <div id="footer_frame" className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center relative size-full px-[25px] md:px-[50px] lg:px-[100px] pt-[15px] pb-[15px] md:pb-[25px] lg:pb-[25px] gap-[15px] md:gap-[25px] lg:gap-[25px]">
          {/* Footer Navigation */}
          <div className="box-border content-start flex flex-wrap items-start justify-center overflow-clip py-0 md:py-[10px] lg:py-[10px] relative shrink-0 gap-[25px] md:gap-[50px] lg:gap-[75px]">
            <NavigationItems isMobile={true} onNavigate={onNavigate} />
          </div>

          {/* Footer Text */}
          <div className="flex flex-col items-center justify-center relative shrink-0 w-full">
            {/* Desktop/Tablet */}
            <div className="hidden md:block font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">
              <p className="mb-0">〒530-0012  大阪市北区芝田1-12-7 大栄ビル新館N1003 </p>
              <p className="mb-0">TEL.06-6376-0903  FAX.06-6376-0913</p>
              <p>Copyright sept.3 Inc. All Rights Reserved.</p>
            </div>

            {/* Mobile */}
            <div className="md:hidden font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">
              <p className="mb-0">〒530-0012  大阪市北区芝田1-12-7</p>
              <p className="mb-0">大栄ビル新館N1003 </p>
              <p className="mb-0">TEL.06-6376-0903  FAX.06-6376-0913</p>
              <p>Copyright sept.3 Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
