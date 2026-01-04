import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">聯繫我們</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#10B981] mb-8">聯繫方式</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#10B981] mb-2">公司地址</h3>
                  <p className="text-[#666666]">香港銅鑼灣希慎道33號</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#10B981] mb-2">電子郵件</h3>
                  <p className="text-[#666666]">team@hklingrui.com</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#10B981] mb-8">發送消息</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="姓名"
                  className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg outline-none"
                />
                <input
                  type="email"
                  placeholder="郵箱"
                  className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg outline-none"
                />
                <textarea
                  rows={5}
                  placeholder="消息"
                  className="w-full px-4 py-3 border-2 border-[#ECF0F6] rounded-lg outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold cursor-pointer"
                >
                  發送
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