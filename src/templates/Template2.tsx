type TemplateProps = {
    data: any
}
  
export default function Template2({ data }: TemplateProps) {
    return (
      <div className="font-serif border-l-4 border-blue-600 pl-4">
        <h2 className="text-3xl font-bold text-blue-600">{data.name}</h2>
        <p className="italic">{data.email} | {data.phone}</p>
        <section className="mt-4">
          <h3 className="text-lg font-semibold">🎓 Education</h3>
          <p>{data.education}</p>
        </section>
        <section className="mt-4">
          <h3 className="text-lg font-semibold">💼 Experience</h3>
          <p>{data.experience}</p>
        </section>
        <section className="mt-4">
          <h3 className="text-lg font-semibold">🛠 Skills</h3>
          <p>{data.skills}</p>
        </section>
      </div>
    )
}
  