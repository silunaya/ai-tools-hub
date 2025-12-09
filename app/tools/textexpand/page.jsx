import ToolForm from "../../components/ToolForm";

export default function TextExpand() {
  return (
    <ToolForm
      apiPath="/api/textexpand"
      label="Text Expander"
      placeholder="Enter short text to expand..."
    />
  );
}
