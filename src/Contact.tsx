import { useState } from 'react';
import { Layout } from './components/Layout';

function RadioButton({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button 
      onClick={onChange}
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
    >
      <div className="relative shrink-0 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill={checked ? "#3f3d3d" : "#D9D9D9"} r="9" />
          {checked && <circle cx="9" cy="9" fill="white" r="4" />}
        </svg>
      </div>
      <div className="flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">{label}</p>
      </div>
    </button>
  );
}

function ContactForm() {
  const [inquiryType, setInquiryType] = useState<'consultation' | 'other'>('consultation');
  const [formData, setFormData] = useState({
    company: '',
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    phone: '',
    email: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { inquiryType, ...formData });
    alert('お問い合わせを送信しました（デモ）');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[25px] md:px-[50px] lg:px-[100px] py-0 relative w-full">
          {/* Title */}
          <div id="main_frame3-1_text" className="box-border content-stretch flex flex-col items-start justify-center px-0 py-[30px] md:py-[30px] lg:py-[60px] relative shrink-0 w-full">
            <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] not-italic relative shrink-0 text-black text-nowrap whitespace-pre text-[26px] leading-[40px] tracking-[13px] md:text-[42px] md:leading-[59px] md:tracking-[21px] lg:text-[42px] lg:leading-[59px] lg:tracking-[21px]">
              CONTACT
            </p>
          </div>

          {/* Form Content */}
          <div className="box-border content-stretch flex flex-col gap-[35px] md:gap-[70px] lg:gap-[70px] items-center pb-[70px] pt-[35px] px-0 relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
              {/* Form Header */}
              <div className="content-stretch flex flex-col gap-[10px] md:gap-[25px] lg:gap-[0] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[16px] md:text-[18px]">お問い合わせ内容を入力</p>
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[16px]">※は必須項目です</p>
              </div>

              {/* Inquiry Type */}
              <div className="content-stretch flex flex-col gap-[14px] md:gap-[0] lg:gap-[0] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] mb-[14px] md:mb-0 lg:mb-0">お問い合わせの内容※</p>
                <div className="content-stretch flex flex-col md:flex-row lg:flex-row gap-[14px] md:gap-[40px] lg:gap-[40px] items-start relative shrink-0 mt-0 md:mt-[25px] lg:mt-[25px]">
                  <RadioButton 
                    checked={inquiryType === 'consultation'}
                    onChange={() => setInquiryType('consultation')}
                    label="新規お取引のご相談"
                  />
                  <RadioButton 
                    checked={inquiryType === 'other'}
                    onChange={() => setInquiryType('other')}
                    label="その他"
                  />
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px]">入力いただいた内容は、お問い合わせへの回答のみに使用いたします。</p>
              </div>

              {/* Company Name */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px]">会社名</p>
                <div className="relative w-full">
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="会社名"
                    className="w-full h-[50px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a]"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px]">お名前※</p>
                <div className="flex flex-col md:flex-row lg:flex-row gap-[15px] md:gap-[20px] lg:gap-[20px] w-full">
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="姓"
                    className="flex-1 h-[48px] md:h-[50px] lg:h-[50px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="名"
                    className="flex-1 h-[48px] md:h-[50px] lg:h-[50px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a]"
                  />
                </div>
              </div>

              {/* Furigana */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px]">フリガナ※</p>
                <div className="flex flex-col md:flex-row lg:flex-row gap-[15px] md:gap-[20px] lg:gap-[20px] w-full">
                  <input
                    type="text"
                    required
                    value={formData.lastNameKana}
                    onChange={(e) => setFormData({ ...formData, lastNameKana: e.target.value })}
                    placeholder="セイ"
                    className="flex-1 h-[48px] md:h-[50px] lg:h-[50px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.firstNameKana}
                    onChange={(e) => setFormData({ ...formData, firstNameKana: e.target.value })}
                    placeholder="メイ"
                    className="flex-1 h-[48px] md:h-[50px] lg:h-[50px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px]">電話番号※</p>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-[48px] md:h-[50px] lg:h-[50px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a]"
                />
              </div>

              {/* Email */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px]">メールアドレス※</p>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-[48px] md:h-[50px] lg:h-[50px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a]"
                />
              </div>

              {/* Content */}
              <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
                <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px]">内容※</p>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="w-full h-[290px] md:h-[290px] lg:h-[290px] bg-white border border-[#9a9a9a] px-[12px] py-[11px] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] text-[18px] text-[#3f3d3d] placeholder:text-[#9a9a9a] resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="h-[36px] relative shrink-0 w-[250px] bg-[#3f3d3d] hover:bg-[#0E7EFE] active:bg-[#0E7EFE] transition-colors"
            >
              <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[10.83%_41.7%_13.88%_38.8%] leading-[28px] not-italic text-[18px] text-center text-white">送信</p>
              <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[10.83%_1.5%_13.88%_92%] leading-[28px] not-italic text-[16px] text-white">〉</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default function Contact({ onNavigate }: { onNavigate: (path: string, hash?: string) => void }) {
  return (
    <Layout onNavigate={onNavigate}>
      <div className="content-stretch flex flex-col items-center w-full gap-[60px] md:gap-[60px] lg:gap-[90px] mt-[60px] md:mt-[35px] lg:mt-[77px]">
        <div className="content-stretch flex flex-col items-center w-full">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}