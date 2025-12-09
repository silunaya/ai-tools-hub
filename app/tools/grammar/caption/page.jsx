import ToolForm from "../../components/ToolForm";

export default function Caption() {
  return (
    <ToolForm
      apiPath="/api/caption"
      label="Caption Generator"
      placeholder="Describe your image or topic..."
    />
  );
}
