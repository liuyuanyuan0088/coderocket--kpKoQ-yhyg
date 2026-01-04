function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B0B1D] px-4 py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <img
            src="https://www.coderocket.app/logo-alternate.png"
            alt="CodeRocket"
            className="h-12 w-12"
          />
          <h1 className="text-[#FFFFFF] text-5xl font-bold">CodeRocket.app</h1>
        </div>
        <p className="text-[#FFFFFF] text-xl">
          AI-powered Tailwind website builder
        </p>
      </div>
    </div>
  );
}

export default App;