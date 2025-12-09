import ToolForm from "../../components/ToolForm";

export default function Title() {
  return (
    <ToolForm
      apiPath="/api/title"
      label="Title Generator"
      placeholder="Enter your content to generate a catchy title..."
    />
  );
}
