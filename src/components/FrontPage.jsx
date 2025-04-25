function FrontPage() {
    return (
      <div className="flex flex-col md:flex-row h-screen w-full">
        {/* Left Side with Background Image */}
        <div
          className="w-full md:w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/4.png)' }}
        ></div>
  
        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Hey! It's me, DHARYLLE
          </h2>
          <p className="text-gray-300 max-w-md">
            "Building Beautiful Ideas into Reality."
          </p>
        </div>
      </div>
    );
  }
  
  export default FrontPage;
  