import ToolForm from "../../components/ToolForm";

export default function Meta() {
  return (
    <ToolForm
      apiPath="/api/meta"
      label="SEO Meta Generator"
      placeholder="Paste page content to generate meta description..."
    />
  );
}
