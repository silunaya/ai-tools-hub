import ToolForm from "../../components/ToolForm";

export default function Resume() {
  return (
    <ToolForm
      apiPath="/api/resume"
      label="Resume Builder"
      placeholder="Paste your work experience/skills..."
    />
  );
}
