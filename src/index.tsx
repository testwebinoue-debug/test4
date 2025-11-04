import imgSept3CorporateLogoImg from "figma:asset/9906cc6bdd385df5fa11fcaed881d972152e3706.png";
import imgSept3TypographyImg from "figma:asset/d03c8f616b9db27e808ea003ce375eea78825e34.png";
import { Layout } from './components/Layout';

function HeroSection() {
  return (
    <div id="home_frame" className="relative shrink-0 w-full h-[627px] md:h-[1077px] lg:h-[1353px]">
      {/* Desktop/Tablet */}
      <div className="hidden md:block bg-[rgba(255,255,255,0)] h-full overflow-clip relative w-full">
        <div className="absolute h-full left-1/2 top-0 translate-x-[-50%] w-[530px] md:w-[833.85px] lg:w-[1150px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3TypographyImg} />
        </div>
        <div className="absolute content-stretch flex gap-[10px] items-start left-[25px] md:left-[50px] lg:left-[100px] top-[248px] md:top-[375px] lg:top-[512px] w-[250px] md:w-[500px] lg:w-[670px]">
          <div className="relative shrink-0 w-full h-[48px] md:h-auto md:aspect-[957/183] lg:h-[128px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3CorporateLogoImg} />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[25px] md:left-[50px] lg:left-[100px] top-[321px] md:top-[525px] lg:top-[692px]">
          <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-black text-nowrap whitespace-pre text-[16px] md:text-[18px] leading-[35px] md:leading-[40px]">
            <p className="mb-0">株式会社 sept.3 は、広告制作会社です。</p>
            <p className="mb-0">グラフィックデザインを中心に、</p>
            <p>さまざまな広告制作を行っています。</p>
          </div>
        </div>
      </div>

      {/* Mobile Only */}
      <div className="md:hidden bg-[rgba(255,255,255,0)] h-[627px] overflow-clip relative w-full">
        <div className="absolute h-[623px] left-[calc(50%+0.5px)] top-[4px] translate-x-[-50%] w-[530px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3TypographyImg} />
        </div>
        <div className="absolute content-stretch flex gap-[10px] items-start left-[25px] top-[248px]">
          <div className="h-[48px] relative shrink-0 w-[250px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3CorporateLogoImg} />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[25px] top-[321px]">
          <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">
            <p className="mb-0">株式会社 sept.3 は、広告制作会社です。</p>
            <p className="mb-0">グラフィックデザインを中心に、</p>
            <p>さまざまな広告制作を行っています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div id="text2" className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full box-border content-stretch flex flex-col items-start overflow-clip p-[25px] md:p-[50px] lg:px-[100px] lg:py-[50px]">
      <div className="relative shrink-0 w-full">
        <div className="relative">
          <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-black text-nowrap whitespace-pre text-[26px] leading-[40px] tracking-[13px] lg:text-[42px] lg:leading-[59px] lg:tracking-[21px]">
            ABOUT
          </p>
        </div>
        <div className="mt-[25px] lg:mt-[50px]">
          {/* Desktop/Tablet */}
          <div className="hidden md:block font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
            <p className="mb-0">株式会社 sept.3 は、</p>
            <p className="mb-0">商業広告制作への意志と技術を持ったデザイナーが集まり、</p>
            <p className="mb-0">アルティザンを目指して、2003年に設立されたデザインプロダクションです。</p>
            <p className="mb-0">ポスター、パンフレット、紙媒体を中心に、新聞、WEB、サイネージなど、</p>
            <p>幅広い広告制作を行っています。</p>
          </div>

          {/* Mobile */}
          <div className="md:hidden font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[16px] text-black w-full">
            <p className="mb-0">株式会社 sept.3 は、</p>
            <p className="mb-0">商業広告制作への意志と技術を持った</p>
            <p className="mb-0">デザイナーが集まり、</p>
            <p className="mb-0">アルティザンを目指して、2003年に設立された</p>
            <p className="mb-0">デザインプロダクションです。</p>
            <p className="mb-0">ポスター、パンフレット、紙媒体を</p>
            <p className="mb-0">中心に、新聞、WEB、サイネージなど、</p>
            <p>幅広い広告制作を行っています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanySection() {
  return (
    <div id="text4" className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full box-border content-stretch flex flex-col items-start overflow-clip p-[25px] md:p-[50px] lg:px-[100px] lg:py-[50px]">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-black tracking-[13px] lg:tracking-[21px] text-nowrap whitespace-pre text-[26px] leading-[40px] lg:text-[42px] lg:leading-[59px] mb-[25px] lg:mb-[50px]">
        COMPANY INFO
      </p>
      
      <div className="content-stretch flex gap-[25px] md:gap-[50px] items-start relative shrink-0 w-full">
        {/* Labels */}
        <div className="font-['Zen_Kaku_Gothic_Antique:Regular','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[16px] md:text-[18px] text-black leading-[35px] md:leading-[40px] w-[80px] md:w-[110px] lg:w-[130px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          <p className="mb-0">会社名 </p>
          <p className="mb-0">所在地 </p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0">設立</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">代表</p>
          <p className="mb-0">事業内容</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p>取引銀行 </p>
        </div>

        {/* Values */}
        <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-[16px] md:text-[18px] text-black leading-[35px] md:leading-[40px] flex-1">
          {/* Desktop/Tablet */}
          <div className="hidden md:block">
            <p className="mb-0">株式会社セプト・スリー</p>
            <p className="mb-0">大阪市北区芝田1-12-7 大栄ビル新館N1003</p>
            <p className="mb-0">2003年7月</p>
            <p className="mb-0">2006年9月 法人化</p>
            <p className="mb-0 whitespace-pre-wrap">代表取締役　鳥飼  久志</p>
            <p className="mb-0">商業広告企画・制作</p>
            <p className="mb-0">交通媒体ポスター、パンフレット、販促物のデザイン</p>
            <p className="mb-0">新聞、WEB、サイネージなどの広告企画・制作</p>
            <p>大阪シティ信用金庫</p>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <p className="mb-0">株式会社セプト・スリー</p>
            <p className="mb-0">大阪市北区芝田1-12-7 </p>
            <p className="mb-0">大栄ビル新館N1003</p>
            <p className="mb-0">2003年7月</p>
            <p className="mb-0">2006年9月 法人化</p>
            <p className="mb-0 whitespace-pre-wrap">代表取締役　鳥飼  久志</p>
            <p className="mb-0">商業広告企画・制作</p>
            <p className="mb-0">交通媒体ポスター、</p>
            <p className="mb-0">パンフレット、</p>
            <p className="mb-0">販促物のデザイン</p>
            <p className="mb-0">新聞、WEB、サイネージなどの広告企画・制作</p>
            <p>大阪シティ信用金庫</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index({ onNavigate }: { onNavigate: (path: string, hash?: string) => void }) {
  return (
    <Layout onNavigate={onNavigate}>
      <div className="content-stretch flex flex-col items-center w-full gap-[75px] md:gap-[80px] lg:gap-[132px] mt-[75px] md:mt-[80px] lg:mt-[132px]">
        <div className="content-stretch flex flex-col gap-[75px] md:gap-[80px] lg:gap-[130px] items-center w-full">
          <HeroSection />
          <AboutSection />
          <CompanySection />
        </div>
      </div>
    </Layout>
  );
}
