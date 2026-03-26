/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { ChevronRight, Loader2, Printer, X, Download } from "lucide-react";

const resultsData = [
  { srNo: 1, title: "M.VOCATIONAL (FOOD SCIENCE & NUTRITION) SEM/YR: 01, 03 : 12-MAR-2026" },
  { srNo: 2, title: "B.VOC(SPORT,NUTRITION & PHYTHERAPY) SEM/YR: 01, 03, 05 : 12-MAR-2026" },
  { srNo: 3, title: "B.VOC (SOFTWARE DEVELOPMENT) SEM/YR: 01, 03, 05, 06 : 12-MAR-2026" },
  { srNo: 4, title: "B.VOC (RETAIL MANAGEMENT) SEM/YR: 01, 03, 05, 06 : 12-MAR-2026" },
  { srNo: 5, title: "B.VOC (MRK. MGT. & INFORMATION TECHNOLOGY) SEM/YR: 01, 03, 05 : 12-MAR-2026" },
  { srNo: 6, title: "B.VOC (INFORMATION TECHNOLOGY) SEM/YR: 01, 03, 05, 06 : 12-MAR-2026" },
  { srNo: 7, title: "BACHELOR OF VOCATIONAL (INTERIOR DESIGN) SEM/YR: 01, 03 : 12-MAR-2026" },
  { srNo: 8, title: "B VOCATIONAL (CATERING TECHNOLOGY & HOTEL MANAGEMENT) SEM/YR: 01, 05 : 12-MAR-2026" },
  { srNo: 9, title: "B.COM B.ED 4-YEAR INTEGRATED TEACHER EDUCATION PROGRAM (ITEP) SEM/YR: 02 : 10-MAR-2026" },
  { srNo: 10, title: "B.A B.ED 4-YEAR INTEGRATED TEACHER EDUCATION PROGRAM (ITEP) SEM/YR: 02 : 10-MAR-2026" },
  { srNo: 11, title: "B.A B.ED 4-YEAR INTEGRATED TEACHER EDUCATION PROGRAM (ITEP) SEM/YR: 04 : 10-MAR-2026" },
  { srNo: 12, title: "M.SC (CHEMISTRY) REAPPEAR SEM/YR: 04 : 10-MAR-2026" },
  { srNo: 13, title: "M.SC. (STATISTICS) REAPPEAR SEM/YR: 04 : 10-MAR-2026" },
  { srNo: 14, title: "M.SC. (PHYSICS) REAPPEAR SEM/YR: 04 : 10-MAR-2026" },
  { srNo: 15, title: "M.SC (MATH WITH COMPUTER SCIENCE) REAPPEAR SEM/YR: 04 : 10-MAR-2026" },
];

export default function App() {
  const [regNo, setRegNo] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState<any>(null);
  const [showPrintModal, setShowPrintModal] = useState(false);

  const handleProceed = () => {
    if (!regNo || !rollNo) {
      setError("Please enter both Registration No and Roll No.");
      return;
    }

    setLoading(true);
    setError("");
    setResultData(null);

    // Simulate system processing
    setTimeout(() => {
      if (regNo === "2311172018" && rollNo === "7091195") {
        const mockResult = {
          name: "Student Name",
          fatherName: "Father's Name",
          rollNo: "7091195",
          regNo: "2311172018",
          course: "B.SC. (PASS) SEM/YR: 05",
          college: "M.D. UNIVERSITY, ROHTAK",
          subjects: [
            { code: "PHY-101", name: "PHYSICS-I", marks: 45, max: 50 },
            { code: "PHY-102", name: "PHYSICS-II", marks: 42, max: 50 },
            { code: "CHM-101", name: "CHEMISTRY-I", marks: 38, max: 50 },
            { code: "CHM-102", name: "CHEMISTRY-II", marks: 40, max: 50 },
            { code: "MAT-101", name: "MATHEMATICS-I", marks: 48, max: 50 },
            { code: "MAT-102", name: "MATHEMATICS-II", marks: 46, max: 50 },
          ],
          total: 259,
          maxTotal: 300,
          result: "PASS",
          pdfUrl: "https://drive.google.com/file/d/1eekv3bNDzTBQOYdkxjhLM5Vv88c8-azk/view?usp=drivesdk"
        };
        setResultData(mockResult);
        setError("");
        // Also open the PDF as per previous requirement
        window.open(mockResult.pdfUrl, "_blank");
      } else {
        setError("Invalid Registration No or Roll No. Please try again.");
      }
      setLoading(false);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#99ccff] p-0 font-sans text-[11px] leading-tight">
      <div className="w-full max-w-[1000px]">
        {/* Print Modal */}
      {showPrintModal && resultData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 print:p-0 print:bg-white print:static">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:rounded-none">
            {/* Modal Header (Hidden on Print) */}
            <div className="p-4 border-b flex items-center justify-between bg-gray-50 print:hidden">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Provisional Result DMC
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md font-bold text-xs transition-colors shadow-sm flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  Print Now
                </button>
                <a
                  href={`https://drive.google.com/uc?export=download&id=1eekv3bNDzTBQOYdkxjhLM5Vv88c8-azk`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded-md font-bold text-xs transition-colors shadow-sm flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Printable Content */}
            <div className="p-8 overflow-y-auto print:overflow-visible print:p-0">
              <div className="border-4 border-double border-gray-800 p-6 print:border-none">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold uppercase tracking-widest text-gray-900 mb-1">MAHARSHI DAYANAND UNIVERSITY, ROHTAK</h1>
                  <p className="text-sm font-medium text-gray-600">(A State University established under Haryana Act No. XXV of 1975)</p>
                  <div className="h-px bg-gray-300 w-full my-4"></div>
                  <h2 className="text-lg font-bold underline decoration-double underline-offset-4">PROVISIONAL RESULT-CUM-DETAILED MARKS CARD</h2>
                </div>

                <div className="grid grid-cols-2 gap-y-3 mb-8 text-sm">
                  <div className="flex gap-2"><span className="font-bold w-32">Name:</span> <span className="uppercase">{resultData.name}</span></div>
                  <div className="flex gap-2"><span className="font-bold w-32">Roll No:</span> <span>{resultData.rollNo}</span></div>
                  <div className="flex gap-2"><span className="font-bold w-32">Father's Name:</span> <span className="uppercase">{resultData.fatherName}</span></div>
                  <div className="flex gap-2"><span className="font-bold w-32">Reg No:</span> <span>{resultData.regNo}</span></div>
                  <div className="flex gap-2 col-span-2"><span className="font-bold w-32">Course:</span> <span className="uppercase">{resultData.course}</span></div>
                  <div className="flex gap-2 col-span-2"><span className="font-bold w-32">College:</span> <span className="uppercase">{resultData.college}</span></div>
                </div>

                <table className="w-full border-collapse border border-gray-800 text-sm mb-8">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-800 p-2 text-left">Subject Code</th>
                      <th className="border border-gray-800 p-2 text-left">Subject Name</th>
                      <th className="border border-gray-800 p-2 text-center">Max Marks</th>
                      <th className="border border-gray-800 p-2 text-center">Marks Obtained</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultData.subjects.map((sub: any) => (
                      <tr key={sub.code}>
                        <td className="border border-gray-800 p-2">{sub.code}</td>
                        <td className="border border-gray-800 p-2">{sub.name}</td>
                        <td className="border border-gray-800 p-2 text-center">{sub.max}</td>
                        <td className="border border-gray-800 p-2 text-center font-bold">{sub.marks}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50 font-bold">
                      <td colSpan={2} className="border border-gray-800 p-2 text-right">TOTAL</td>
                      <td className="border border-gray-800 p-2 text-center">{resultData.maxTotal}</td>
                      <td className="border border-gray-800 p-2 text-center">{resultData.total}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-between items-end mt-12">
                  <div className="text-sm">
                    <p className="font-bold">Result: <span className="text-green-700">{resultData.result}</span></p>
                    <p className="mt-1 text-xs text-gray-500">Date of Declaration: 26-MAR-2026</p>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-32 border-b border-gray-400 mb-1"></div>
                    <p className="text-[10px] font-bold uppercase">Controller of Examinations</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200 text-[9px] text-gray-400 italic text-center">
                  This is a computer generated provisional result. For official purposes, please rely on the original DMC issued by the University.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        <div className="pt-2 pl-2">
          <div className="w-[360px] sm:w-[440px] border border-gray-400 bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#808080] text-white text-left h-6">
                  <th className="px-1 border border-gray-400 w-10 text-center font-normal">SrNo</th>
                  <th className="px-1 border border-gray-400 font-normal">Result Declared</th>
                </tr>
              </thead>
              <tbody>
                {resultsData.map((result, index) => (
                  <tr 
                    key={result.srNo} 
                    className={index % 2 === 0 ? "bg-white" : "bg-[#ffffcc]"}
                  >
                    <td className="px-1 border border-gray-300 text-center py-0.5">{result.srNo}</td>
                    <td className="px-1 border border-gray-300 py-0.5 uppercase">{result.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Result Input Section */}
        <div className="mt-2 pl-2">
          <h2 className="text-[#0099cc] text-lg font-bold mb-1">Result</h2>
          <div className="bg-[#ffffcc] border border-[#ffcc66] p-1 w-[680px] max-w-full">
            <div className="flex items-center gap-4 py-1 px-2">
              <div className="flex items-center gap-1">
                <label className="text-gray-700">Registration No:</label>
                <input
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  className="border border-gray-300 bg-white px-1 w-[110px] h-5 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-1">
                <label className="text-gray-700">Roll No:</label>
                <input
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="border border-gray-300 bg-white px-1 w-[80px] h-5 focus:outline-none"
                />
              </div>
              <div className="flex-1"></div>
              <button
                onClick={handleProceed}
                disabled={loading}
                className={`bg-gradient-to-b from-[#ffcc66] to-[#ff9933] border border-[#cc6600] px-2 py-0.5 rounded-sm flex items-center gap-1 font-bold text-black text-[10px] shadow-sm transition-all ${
                  loading ? "opacity-75 cursor-wait" : "hover:brightness-105 active:brightness-95"
                }`}
              >
                {loading ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <div className="bg-black text-white rounded-full w-3 h-3 flex items-center justify-center">
                    <ChevronRight className="w-2.5 h-2.5" strokeWidth={5} />
                  </div>
                )}
                {loading ? "Processing..." : "Proceed Now"}
              </button>
            </div>
          </div>
          
          {error && (
            <p className="text-red-600 mt-1 font-bold text-[10px]">{error}</p>
          )}

          {resultData && (
            <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded shadow-sm flex items-center justify-between w-[680px] max-w-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-bold text-[10px]">Result Found for Roll No: {resultData.rollNo}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPrintModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-1 font-bold text-[10px] transition-colors shadow-sm"
                >
                  <Printer className="w-3 h-3" />
                  Print Result
                </button>
                <a
                  href={`https://drive.google.com/uc?export=download&id=1eekv3bNDzTBQOYdkxjhLM5Vv88c8-azk`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded flex items-center gap-1 font-bold text-[10px] transition-colors shadow-sm"
                >
                  <Download className="w-3 h-3" />
                  Download Result
                </a>
              </div>
            </div>
          )}

          <p className="text-[#990000] mt-3 font-bold text-[10px]">
            **The Results displayed here subject to updation/correction. The final result will on DMC.
          </p>

          <div className="mt-4 text-[#990000] text-[10px]">
            <h3 className="font-bold mb-1">Instructions:</h3>
            <p className="ml-4">
              1- Enter your complete "Registration No" and "Roll Number" for searching.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
