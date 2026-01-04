import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function AppDownload() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">App下載</h1>
            <p className="text-xl text-[#5A5A5A]">隨時隨地掌握投資動態</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#ECF0F6] rounded-lg p-12">
              <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">立即下載</h2>
              <div className="space-y-4">
                <a
                  href="https://apps.apple.com"
                  className="flex items-center justify-center gap-3 bg-black text-white rounded-lg px-6 py-4 cursor-pointer"
                >
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com"
                  className="flex items-center justify-center gap-3 bg-black text-white rounded-lg px-6 py-4 cursor-pointer"
                >
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AppDownload;