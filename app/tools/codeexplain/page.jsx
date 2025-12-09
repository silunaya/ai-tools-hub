import ToolForm from "../../components/ToolForm";

export default function CodeExplain() {
  return (
    <ToolForm
      apiPath="/api/codeexplain"
      label="Code Explainer"
      placeholder="Paste your code to explain..."
    />
  );
}
