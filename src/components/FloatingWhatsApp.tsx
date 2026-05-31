import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        className={`bg-[#111827] text-white text-xs font-medium px-4 py-2 rounded-xl mr-3 shadow-lg border border-white/5 transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with us!
      </div>

      {/* Button */}
      <a
        href="https://wa.me/+8801733212051"
        target="_blank"
        rel="noopener noreferrer"
        id="global-whatsapp-btn"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#25D366]/40 cursor-pointer relative"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsating Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-40" />

        <svg
          className="w-7 h-7 relative z-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.824-6.861C16.59 2.19 14.16 1.187 11.624 1.187 6.185 1.187 1.76 5.557 1.757 10.918c-.001 1.637.451 3.235 1.309 4.639l-.4 1.458.423-.112zm13.107-5.183c-.326-.163-1.93-.953-2.229-1.062-.299-.109-.517-.163-.734.163-.217.327-.84.106-1.03.327-.19.22-.38.24-.706.078-.326-.163-1.378-.508-2.625-1.623-.97-.866-1.625-1.936-1.815-2.263-.19-.327-.02-.504.143-.666.147-.146.327-.381.49-.572.163-.19.217-.327.326-.545.109-.217.055-.408-.027-.571-.082-.163-.734-1.77-.993-2.424-.26-.64-.527-.549-.73-.559-.188-.01-.403-.012-.617-.012-.215 0-.565.081-.861.408-.296.327-1.13 1.104-1.13 2.693 0 1.587 1.155 3.119 1.316 3.337.161.218 2.274 3.473 5.509 4.873.769.333 1.37.532 1.837.68.773.245 1.478.21 2.035.127.62-.093 1.93-.789 2.202-1.552.272-.763.272-1.415.19-1.551-.082-.136-.299-.218-.625-.381z" />
        </svg>
      </a>
    </div>
  );
}
