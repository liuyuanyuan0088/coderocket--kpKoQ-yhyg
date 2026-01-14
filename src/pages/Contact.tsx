import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useContent } from '../contexts/ContentContext';
function Contact() {
  const { contactPageContent } = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">
              {contactPageContent.pageTitle}
            </h1>
            <p className="text-xl text-[#5A5A5A]">
              {contactPageContent.pageSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#10B981] mb-8">
                {contactPageContent.contactMethodsTitle}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#10B981] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10B981] mb-2">
                      {contactPageContent.addressTitle}
                    </h3>
                    <p className="text-[#666666]">{contactPageContent.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#10B981] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10B981] mb-2">
                      {contactPageContent.emailTitle}
                    </h3>
                    <p className="text-[#666666]">{contactPageContent.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#10B981] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10B981] mb-2">
                      {contactPageContent.phoneTitle}
                    </h3>
                    <p className="text-[#666666]">{contactPageContent.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#10B981] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10B981] mb-2">
                      {contactPageContent.hoursTitle}
                    </h3>
                    <p className="text-[#666666]">{contactPageContent.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#10B981] mb-8">
                {contactPageContent.formTitle}
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#10B981] font-medium mb-2">
                    {contactPageContent.nameLabel}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#10B981] outline-none transition-colors"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-[#10B981] font-medium mb-2">
                    {contactPageContent.emailLabel}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#10B981] outline-none transition-colors"
                    placeholder="請輸入您的郵箱"
                  />
                </div>
                <div>
                  <label className="block text-[#10B981] font-medium mb-2">
                    {contactPageContent.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#10B981] outline-none transition-colors"
                    placeholder="請輸入您的電話"
                  />
                </div>
                <div>
                  <label className="block text-[#10B981] font-medium mb-2">
                    {contactPageContent.messageLabel}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg focus:border-[#10B981] outline-none transition-colors resize-none"
                    placeholder="請輸入您想諮詢的內容"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#059669] transition-colors cursor-pointer"
                >
                  {contactPageContent.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;