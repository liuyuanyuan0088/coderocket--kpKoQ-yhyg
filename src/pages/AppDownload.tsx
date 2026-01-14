import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useContent } from '../contexts/ContentContext';
function AppDownload() {
  const { appDownloadContent } = useContent();
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#10B981] mb-6">{appDownloadContent.pageTitle}</h1>
            <p className="text-xl text-[#5A5A5A]">{appDownloadContent.pageSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">{appDownloadContent.featuresTitle}</h2>
              <ul className="space-y-4">
                {appDownloadContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#ECF0F6] rounded-lg p-12">
              <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">{appDownloadContent.downloadTitle}</h2>
              <div className="space-y-4 mb-8">
                <a
                  href={appDownloadContent.iosAppStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-black text-white rounded-lg px-6 py-4 hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href={appDownloadContent.androidPlayStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-black text-white rounded-lg px-6 py-4 hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              <div className="text-center">
                <p className="text-[#666666] mb-4">{appDownloadContent.qrCodeDescription}</p>
                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white border-2 border-[#10B981] rounded-lg mb-2 flex items-center justify-center">
                      <img src={appDownloadContent.iosQRCode} alt="iOS QR Code" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm text-[#666666]">iOS版本</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white border-2 border-[#10B981] rounded-lg mb-2 flex items-center justify-center">
                      <img src={appDownloadContent.androidQRCode} alt="Android QR Code" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm text-[#666666]">Android版本</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ECF0F6] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-[#10B981] mb-8 text-center">{appDownloadContent.systemRequirementsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#10B981] mb-4">{appDownloadContent.iosTitle}</h3>
                <ul className="space-y-2 text-[#666666]">
                  {appDownloadContent.iosRequirements.map((req, index) => (
                    <li key={index}>• {req}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#10B981] mb-4">{appDownloadContent.androidTitle}</h3>
                <ul className="space-y-2 text-[#666666]">
                  {appDownloadContent.androidRequirements.map((req, index) => (
                    <li key={index}>• {req}</li>
                  ))}
                </ul>
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