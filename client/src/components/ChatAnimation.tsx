export default function ChatAnimation() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
              <i className="fas fa-robot text-white"></i>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm max-w-[80%]">
              <p className="text-gray-700">Hi! I'm your AI assistant. How can I help you today?</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 justify-end">
            <div className="bg-purple-600 p-4 rounded-2xl shadow-sm max-w-[80%]">
              <p className="text-white">I'm interested in learning more about your services.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <i className="fas fa-user text-gray-600"></i>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
              <i className="fas fa-robot text-white"></i>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm max-w-[80%]">
              <p className="text-gray-700">Great! Let me ask you a few questions to better understand your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 