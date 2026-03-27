"use client";

type SizeGuideProps = {
  open: boolean;
  onClose: () => void;
};

const sizeData = [
  { size: "XS", bust: 32, waist: 26, hips: 35, length: 52 },
  { size: "S",  bust: 34, waist: 28, hips: 37, length: 52 },
  { size: "M",  bust: 36, waist: 30, hips: 39, length: 53 },
  { size: "L",  bust: 38, waist: 32, hips: 41, length: 53 },
  { size: "XL", bust: 40, waist: 34, hips: 43, length: 54 },
  { size: "XXL",bust: 42, waist: 36, hips: 45, length: 54 },
];

export default function SizeGuide({ open, onClose }: SizeGuideProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div>
            <h2
              className="text-xl text-[#0a0a0a]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Size Guide
            </h2>
            <div className="w-10 h-0.5 bg-[#d4af37] mt-1" />
          </div>
          <button
            onClick={onClose}
            aria-label="Close size guide"
            className="text-gray-400 hover:text-[#0a0a0a] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Table */}
        <div className="px-6 py-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0a0a0a] text-white">
                  <th className="px-4 py-3 text-left text-[11px] tracking-widest uppercase font-normal">
                    Size
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] tracking-widest uppercase font-normal">
                    Bust (in)
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] tracking-widest uppercase font-normal">
                    Waist (in)
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] tracking-widest uppercase font-normal">
                    Hips (in)
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] tracking-widest uppercase font-normal">
                    Length (in)
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, idx) => (
                  <tr
                    key={row.size}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[#f5f0e8]"}
                  >
                    <td className="px-4 py-3 font-semibold text-[#0a0a0a]">
                      {row.size}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.bust}</td>
                    <td className="px-4 py-3 text-gray-700">{row.waist}</td>
                    <td className="px-4 py-3 text-gray-700">{row.hips}</td>
                    <td className="px-4 py-3 text-gray-700">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
            <p className="text-[11px] text-gray-500 leading-relaxed">
              All measurements are in inches. For best fit, measure over your undergarments.
            </p>
            <p className="text-[11px] text-[#d4af37] font-medium">
              Tip: If between sizes, size up for comfort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
