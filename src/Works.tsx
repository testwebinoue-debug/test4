import imgSept3TypographyImg from "figma:asset/4c7b9b4d83514316b5c0654b555988839b58e31b.png";
import imgSept3ResponseImg from "figma:asset/792b6420d451eea18c9f1550d9f67be1a8770c4c.png";
import imgSept3FeelingImg from "figma:asset/9cd2758507eb6df8272185842c484d87da3a7b4d.png";
import imgSept3ThoughtsImg from "figma:asset/0523c1769aab7662ac612ffce3acd6f77fca2cfb.png";
import imgSept3FaceImg from "figma:asset/d347335d093280eb724bf6c25fa6a70e4e23fa2d.png";
import { Layout } from './components/Layout';

function PhilosophySection() {
  return (
    <div id="philosophy_text" className="relative shrink-0 w-full h-[360px] md:h-[900px] lg:h-[1150px]">
      {/* Background Image */}
      <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[10px] items-start justify-center left-1/2 translate-x-[-50%] overflow-clip px-[25px] md:px-[50px] lg:px-[270px] py-0 top-[60px] md:top-[200px] lg:top-[249px] w-full">
        <div className="relative shrink-0 w-full h-[300px] md:h-[641px] lg:h-[853px] max-w-[343px] md:max-w-[734px] lg:max-w-[1000px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3TypographyImg} />
        </div>
      </div>
      
      {/* Title */}
      <div className="absolute box-border content-stretch flex items-start left-1/2 translate-x-[-50%] px-[25px] md:px-[50px] lg:px-[100px] py-0 md:py-[30px] lg:py-[60px] top-0 w-full">
        <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0">
          <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-black text-nowrap whitespace-pre text-[26px] leading-[59px] tracking-[13px] md:text-[42px] md:tracking-[21px] lg:text-[42px] lg:leading-[59px] lg:tracking-[21px]">
            PHILOSOPHY
          </p>
        </div>
      </div>
    </div>
  );
}

function IntroductionSection() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full box-border content-stretch flex flex-col items-start overflow-clip p-[25px] md:p-[50px] lg:px-[100px] lg:py-[50px]">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        {/* Desktop/Tablet */}
        <div className="hidden md:block font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
          <p className="mb-0">sept.3 には、個性を尊重し、心がつながる仕組みがあります。</p>
          <p className="mb-0">私たちは自分たちの仕事を取り巻くさまざまな環境を見つめ直し、</p>
          <p className="mb-0">暮らしや文化、そして企業を支えているのは「人」であり、</p>
          <p className="mb-0">その原動力は「心のエネルギー」であると考えています。</p>
          <p className="mb-0">sept.3 は、それぞれが同じ軌道・同じリズムで回り続けるプラネッツのような存在です。</p>
          <p>バランスを保ちながら輝き続け、その中心には常に「心のエネルギー」があります。</p>
        </div>

        {/* Mobile */}
        <div className="md:hidden font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[16px] text-black w-full">
          <p className="mb-0">sept.3 には、個性を尊重し、</p>
          <p className="mb-0">心がつながる仕組みがあります。</p>
          <p className="mb-0">私たちは自分たちの仕事を取り巻く</p>
          <p className="mb-0">さまざまな環境を見つめ直し、</p>
          <p className="mb-0">暮らしや文化、そして企業を支えているのは</p>
          <p className="mb-0">「人」であり、</p>
          <p className="mb-0">その原動力は「心のエネルギー」であると</p>
          <p className="mb-0">考えています。</p>
          <p className="mb-0">sept.3 は、それぞれが同じ軌道・同じリズムで</p>
          <p className="mb-0">回り続けるプラネッツのような存在です。</p>
          <p className="mb-0">バランスを保ちながら輝き続け、その中心には</p>
          <p>常に「心のエネルギー」があります。</p>
        </div>
      </div>
    </div>
  );
}

function ThreeHeartsSection() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full h-[759px] md:h-[1195px] lg:h-[1195px] overflow-clip">
      {/* 心を慥かめる */}
      <div className="absolute h-[240px] md:h-[365px] lg:h-[365px] left-1/2 top-0 translate-x-[-50%] w-[235px] md:w-[308px] lg:w-[308px]">
        <div className="absolute left-[60px] md:left-[27px] lg:left-[27px] size-[114.504px] md:size-[200px] lg:size-[200px] top-[13px] md:top-[26px] lg:top-[26px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3ResponseImg} />
        </div>
        <div className="absolute box-border content-stretch flex gap-[19.084px] md:gap-[25px] lg:gap-[25px] items-start left-[17.56px] md:left-[23px] lg:left-[23px] px-0 py-[3.817px] md:py-[5px] lg:py-[5px] top-[132.5px] md:top-[225.6px] lg:top-[225.6px]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[7.634px] md:gap-[10px] lg:gap-[10px] items-center justify-center ml-[1.527px] md:ml-[2px] lg:ml-[2px] mt-[38.931px] md:mt-[51px] lg:mt-[51px] relative">
              <div className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[18px] text-black text-nowrap whitespace-pre">
                <p className="mb-0">動揺を導くデザインを</p>
                <p>摸索することからはじめます</p>
              </div>
            </div>
            <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[7.634px] md:gap-[10px] lg:gap-[10px] items-center justify-center ml-0 mt-0 relative">
              <p className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c20000] text-[21px] md:text-[28px] lg:text-[28px] text-nowrap whitespace-pre">心を慥かめる</p>
            </div>
          </div>
        </div>
      </div>

      {/* 心を掻き乱す */}
      <div className="absolute h-[240px] md:h-[365px] lg:h-[365px] left-1/2 top-[255px] md:top-[415px] lg:top-[415px] translate-x-[-50%] w-[235px] md:w-[308px] lg:w-[308px]">
        <div className="absolute left-[60px] md:left-[27px] lg:left-[27px] size-[114.504px] md:size-[200px] lg:size-[200px] top-[13px] md:top-[26px] lg:top-[26px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3FeelingImg} />
        </div>
        <div className="absolute box-border content-stretch flex gap-[19.084px] md:gap-[25px] lg:gap-[25px] items-start left-[17.56px] md:left-[23px] lg:left-[23px] px-0 py-[3.817px] md:py-[5px] lg:py-[5px] top-[132.5px] md:top-[225.6px] lg:top-[225.6px]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[7.634px] md:gap-[10px] lg:gap-[10px] items-center justify-center ml-[1.527px] md:ml-[2px] lg:ml-[2px] mt-[38.931px] md:mt-[51px] lg:mt-[51px] relative">
              <div className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[18px] text-black text-nowrap whitespace-pre">
                <p className="mb-0">共鳴する周波数を</p>
                <p>見つけだすための戦略を探ります</p>
              </div>
            </div>
            <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[7.634px] md:gap-[10px] lg:gap-[10px] items-center justify-center ml-0 mt-0 relative">
              <p className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c20000] text-[21px] md:text-[28px] lg:text-[28px] text-nowrap whitespace-pre">心を掻き乱す</p>
            </div>
          </div>
        </div>
      </div>

      {/* 心を捉える */}
      <div className="absolute h-[240px] md:h-[365px] lg:h-[365px] left-1/2 top-[510px] md:top-[830px] lg:top-[830px] translate-x-[-50%] w-[235px] md:w-[308px] lg:w-[308px]">
        <div className="absolute left-[55px] md:left-[20px] lg:left-[20px] size-[114.504px] md:size-[200px] lg:size-[200px] top-[13px] md:top-[26px] lg:top-[26px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3ThoughtsImg} />
        </div>
        <div className="absolute box-border content-stretch flex gap-[19.084px] md:gap-[25px] lg:gap-[25px] items-start left-[17.56px] md:left-[23px] lg:left-[23px] px-0 py-[3.817px] md:py-[5px] lg:py-[5px] top-[132.5px] md:top-[225.6px] lg:top-[225.6px]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[7.634px] md:gap-[10px] lg:gap-[10px] items-center justify-center ml-[1.527px] md:ml-[2px] lg:ml-[2px] mt-[38.931px] md:mt-[51px] lg:mt-[51px] relative">
              <div className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[18px] text-black text-nowrap whitespace-pre">
                <p className="mb-0">欲求を充たすをデザインする</p>
                <p>その表現力を追求します</p>
              </div>
            </div>
            <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[7.634px] md:gap-[10px] lg:gap-[10px] items-center justify-center ml-0 mt-0 relative">
              <p className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c20000] text-[21px] md:text-[28px] lg:text-[28px] text-nowrap whitespace-pre">心を捉える</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaceSection() {
  return (
    <div className="flex items-center justify-center relative shrink-0 w-full">
      <div className="flex-none scale-y-[-100%] w-full">
        <div className="bg-[rgba(255,255,255,0)] overflow-clip relative w-full h-[227.613px] md:h-[483px] lg:h-[718px]">
          <div className="absolute content-stretch flex items-start justify-center left-1/2 top-[-24.29px] md:top-[-51.55px] lg:top-[-89px] translate-x-[-50%] h-[266.094px] md:h-[564.688px] lg:h-[975px]">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none scale-y-[-100%]">
                <div className="relative h-[308.786px] md:h-[655.286px] lg:h-[1131px] w-full max-w-[393px] md:max-w-[834px] lg:max-w-[1440px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3FaceImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorksSection() {
  return (
    <div id="main_frame3-1_text" className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full box-border content-stretch flex flex-col items-start overflow-clip p-[25px] md:p-[50px] lg:px-[100px] lg:py-[50px] gap-[25px] md:gap-[50px] lg:gap-[50px]">
      {/* Title */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-black text-nowrap whitespace-pre text-[26px] leading-[40px] tracking-[13px] md:text-[42px] md:leading-[59px] md:tracking-[21px] lg:text-[42px] lg:leading-[59px] lg:tracking-[21px]">
          WORKS
        </p>
      </div>

      {/* Description */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        {/* Desktop/Tablet */}
        <div className="hidden md:block font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
          <p className="mb-0">出会った瞬間に心奪われる、音楽、風景、笑顔、デザイン。</p>
          <p>デザインのチカラで心を動かす、感極まるデザインを追求します。</p>
        </div>

        {/* Mobile */}
        <div className="md:hidden font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[16px] text-black w-full">
          <p className="mb-0">出会った瞬間に心奪われる、音楽、風景、</p>
          <p className="mb-0">笑顔、デザイン。</p>
          <p className="mb-0">デザインのチカラで心を動かす、</p>
          <p>感極まるデザインを追求します。</p>
        </div>
      </div>

      {/* Services List */}
      <div className="content-stretch flex gap-[20px] md:gap-[50px] lg:gap-[50px] items-start relative shrink-0 w-full">
        {/* Labels */}
        <div className="font-['Zen_Kaku_Gothic_Antique:Regular','Noto_Sans:Regular',sans-serif] relative shrink-0 text-[16px] md:text-[18px] lg:text-[18px] text-black leading-[35px] md:leading-[40px] lg:leading-[40px] w-[100px] md:w-[130px] lg:w-[130px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          <p className="mb-0 md:whitespace-pre-wrap lg:whitespace-pre-wrap">ADVERTISING{'\u00A0\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:whitespace-pre-wrap lg:whitespace-pre-wrap">BROCHURES{'\u00A0\u00A0\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0">CATALOGS</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md:hidden">&nbsp;</p>
          <p className="mb-0 md:whitespace-pre-wrap lg:whitespace-pre-wrap">CD JACKET{'\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md:whitespace-pre-wrap lg:whitespace-pre-wrap">PACKAGING{'\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">MENU</p>
          <p className="mb-0">&nbsp;</p>
          <p className="whitespace-pre-wrap">WEB{'\u00A0\u00A0'}DESIGN</p>
        </div>

        {/* Values */}
        <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[18px] text-black leading-[35px] md:leading-[40px] lg:leading-[40px] flex-1">
          {/* Desktop */}
          <div className="hidden lg:block">
            <p className="mb-0">駅貼りポスター・車内吊りポスター・チラシ・サイネージ・新聞・雑誌</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">旅行パンフレット・情報誌・ガイドマップ・会社案内・学校案内・自治体広報紙・インバウンド向けツール（翻訳業務）</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">展示会作品集・総合カタログ・販促ツール</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">音楽CDアルバム・ジャケット</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">化粧品・サプリメント</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">飲食店・美容理容・雑貨</p>
            <p className="mb-0">&nbsp;</p>
            <p>旅行・イベント告知　etc.</p>
          </div>

          {/* Tablet */}
          <div className="hidden md:block lg:hidden">
            <p className="mb-0">駅貼りポスター・車内吊りポスター・チラシ</p>
            <p className="mb-0">サイネージ・新聞・雑誌</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">旅行パンフレット・情報誌・ガイドマップ</p>
            <p className="mb-0">会社案内・学校案内・自治体広報紙</p>
            <p className="mb-0">インバウンド向けツール（翻訳業務）</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">展示会作品集・総合カタログ・販促ツール</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">音楽CDアルバム・ジャケット</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">化粧品・サプリメント</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">飲食店・美容理容・雑貨</p>
            <p className="mb-0">&nbsp;</p>
            <p>旅行・イベント告知　etc.</p>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <p className="mb-0">駅貼りポスター・</p>
            <p className="mb-0">車内吊りポスター・チラシ</p>
            <p className="mb-0">サイネージ・新聞・雑誌</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">旅行パンフレット・情報誌・</p>
            <p className="mb-0">ガイドマップ</p>
            <p className="mb-0">会社案内・学校案内・</p>
            <p className="mb-0">自治体広報紙</p>
            <p className="mb-0">インバウン向けツール</p>
            <p className="mb-0">（翻訳業務）</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">展示会作品集・</p>
            <p className="mb-0">総合カタログ・販促ツール</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">音楽CDアルバム・ジャケット</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">化粧品・サプリメント</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">飲食店・美容理容・雑貨</p>
            <p className="mb-0">&nbsp;</p>
            <p>旅行・イベント告知　etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works({ onNavigate }: { onNavigate: (path: string, hash?: string) => void }) {
  return (
    <Layout onNavigate={onNavigate}>
      <div className="content-stretch flex flex-col items-center w-full gap-[75px] md:gap-[60px] lg:gap-[90px] mt-[60px] md:mt-[35px] lg:mt-[200px]">
        <div className="content-stretch flex flex-col gap-[75px] md:gap-[60px] lg:gap-[90px] items-center w-full">
          <PhilosophySection />
          <IntroductionSection />
          <ThreeHeartsSection />
          <FaceSection />
          <WorksSection />
        </div>
      </div>
    </Layout>
  );
}