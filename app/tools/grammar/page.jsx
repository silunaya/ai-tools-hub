import ToolForm from "../../components/ToolForm";

export default function Grammar() {
  return (
    <ToolForm
      apiPath="/api/grammar"
      label="Grammar Fixer"
      placeholder="Paste text to correct grammar..."
    />
  );
}
