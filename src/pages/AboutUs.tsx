import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#34478F] mb-6">關於我們</h1>
            <p className="text-xl text-[#5A5A5A]">專注於東盟地區新能源資產投資管理</p>
          </div>
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#34478F] to-[#5B6FB5] rounded-lg p-12 text-white mb-12">
              <h2 className="text-3xl font-bold mb-6">公司簡介</h2>
              <p className="text-lg leading-relaxed mb-4">
                東盟新能資產管理有限公司是一家專注於東盟地區新能源領域投資管理的專業機構。
                我們擁有經驗豐富的投資管理團隊，深入了解東盟各國市場特點和投資環境。
              </p>
              <p className="text-lg leading-relaxed">
                公司秉持專業、創新、穩健的經營理念，致力於為客戶提供優質的資產管理服務，
                通過專業的投資策略和嚴格的風險管理，為客戶創造長期穩健的投資回報。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#34478F] mb-2">10+</div>
                <p className="text-[#666666]">專業投資經理</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#34478F] mb-2">20+</div>
                <p className="text-[#666666]">投資項目</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#34478F] mb-2">500M+</div>
                <p className="text-[#666666]">管理資產規模（美元）</p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#34478F] mb-8 text-center">管理團隊</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#ECF0F6] rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-[#34478F] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#34478F] mb-2">張明</h3>
                <p className="text-[#666666] mb-4">首席執行官</p>
                <p className="text-sm text-[#666666]">20年投資管理經驗，曾任大型基金公司高管</p>
              </div>
              <div className="bg-[#ECF0F6] rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-[#34478F] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#34478F] mb-2">李華</h3>
                <p className="text-[#666666] mb-4">首席投資官</p>
                <p className="text-sm text-[#666666]">15年新能源行業投資經驗，專注於東盟市場</p>
              </div>
              <div className="bg-[#ECF0F6] rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-[#34478F] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#34478F] mb-2">王芳</h3>
                <p className="text-[#666666] mb-4">首席風險官</p>
                <p className="text-sm text-[#666666]">18年風險管理經驗，專長於投資風險控制</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ECF0F6] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-[#34478F] mb-6 text-center">發展歷程</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-[#34478F]">2020年</div>
                <div className="text-[#666666]">公司成立，開始專注於東盟新能源領域投資</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-[#34478F]">2021年</div>
                <div className="text-[#666666]">完成首個新能源項目投資，管理資產規模達到1億美元</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-[#34478F]">2022年</div>
                <div className="text-[#666666]">擴展投資組合，管理資產規模突破3億美元</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 font-bold text-[#34478F]">2023年</div>
                <div className="text-[#666666]">開拓多個東盟國家市場，管理資產規模達到5億美元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;