import ToolForm from "../../components/ToolForm";

export default function ImageDesc() {
  return (
    <ToolForm
      apiPath="/api/imagedesc"
      label="Image Description"
      placeholder="Describe your image for AI to generate alt text..."
    />
  );
}
