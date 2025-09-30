import { useState } from "react"
import ResumeForm from "../components/ResumeForm"
import TemplateSelector from "../components/TemplateSelector"
import { Template1, Template2, Template3 } from "../templates/BrowserTemplates"
import { PDFTemplate1, PDFTemplate2, PDFTemplate3 } from "../templates/PDFTemplates"
import { generatePDF } from "../utils/pdfUtils"





export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  })

  const [template, setTemplate] = useState("template1")

  const handleDownload = async () => {
    if (template === "template1") {
      await generatePDF(<PDFTemplate1 data={formData} />);
    } else if (template === "template2") {
      await generatePDF(<PDFTemplate2 data={formData} />);
    } else if (template === "template3") {
      await generatePDF(<PDFTemplate3 data={formData} />);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Resume to PDF Converter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <ResumeForm formData={formData} setFormData={setFormData} />

        {/* Preview + PDF */}
        <div>
          <TemplateSelector template={template} setTemplate={setTemplate} />

          <div className="border p-4 bg-white rounded-lg shadow mt-4 h-[500px] overflow-auto">
            {template === "template1" ? (
              <Template1 data={formData} />
            ) : template === "template2" ? (
              <Template2 data={formData} />
            ) : template === "template3" ? (
              <Template3 data={formData} />
            ) : null}
          </div>

          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  )
}
