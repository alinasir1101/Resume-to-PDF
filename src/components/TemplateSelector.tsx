type TemplateSelectorProps = {
    template: string
    setTemplate: (t: string) => void
}
  
export default function TemplateSelector({ template, setTemplate }: TemplateSelectorProps) {
    return (
      <div className="flex space-x-4">

        <button
          onClick={() => setTemplate("template1")}
          className={`px-4 py-2 rounded ${
            template === "template1" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Template 1
        </button>

        <button
          onClick={() => setTemplate("template2")}
          className={`px-4 py-2 rounded ${
            template === "template2" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Template 2
        </button>

        <button
          onClick={() => setTemplate("template3")}
          className={`px-4 py-2 rounded ${
            template === "template2" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Template 3
        </button>

      </div>
    )
}
  