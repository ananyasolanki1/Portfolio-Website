import Image from "next/image";

export default function BrowserFrame() {
  return (
    <div className="w-full max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden border border-gray-300 bg-white">
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-300">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Screenshot */}
      <div className="w-full h-auto">
        <Image
          src="/portfolio-ss.png"
          alt="Portfolio Screenshot"
          width={1200}
          height={800}
          className="object-contain"
        />
      </div>
    </div>
  );
}
