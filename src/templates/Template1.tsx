type TemplateProps = {
    data: any
}
  
export default function Template1({ data }: TemplateProps) {
    return (
      <div className="font-sans">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p>{data.email} | {data.phone}</p>
        <h3 className="mt-4 font-semibold">Education</h3>
        <p>{data.education}</p>
        <h3 className="mt-4 font-semibold">Experience</h3>
        <p>{data.experience}</p>
        <h3 className="mt-4 font-semibold">Skills</h3>
        <p>{data.skills}</p>
      </div>
    )
}
  