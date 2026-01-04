function CoreValues() {
  const values = [
    {
      icon: 'https://hklingrui.com/pc/images/gc.png',
      title: '共創',
      description: '團隊是我們最強的競爭力，我們堅信協作創造最大的價值。每位成員的智慧與努力，構築了我們不斷進步的動力。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/dc.png',
      title: '洞察',
      description: '成功的投資源於對市場、趨勢和週期的深刻理解。我們將持續以敏銳的洞察力為客戶提供獨到的市場分析與前瞻建議。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/wj.png',
      title: '穩進',
      description: '我們秉持理性投資理念，始終堅持長期主義。無論市場環境如何變化，我們始終穩步前行。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/xr.png',
      title: '信任',
      description: '透明與責任是我們建立的基石。我們致力於通過專業的服務和可靠的執行，贏得客戶、團隊及市場的信任。'
    },
    {
      icon: 'https://hklingrui.com/pc/images/jh.png',
      title: '進化',
      description: '時代不斷進化，我們也在不斷成長。通過不斷學習和實踐，我們優化決策與團隊管理，始終保持行業領先地位。'
    }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#34478F] mb-4">核心價值觀</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#ECF0F6] rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#34478F] mb-4 text-center">{value.title}</h3>
              <p className="text-[#666666] leading-relaxed text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CoreValues;