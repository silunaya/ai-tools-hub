import ToolForm from "../../components/ToolForm";

export default function Translate() {
  return (
    <ToolForm
      apiPath="/api/translate"
      label="Translator"
      placeholder="Enter text to translate..."
    />
  );
}
