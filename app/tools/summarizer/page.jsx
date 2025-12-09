import ToolForm from "../../components/ToolForm";

export default function Summarizer() {
  return (
    <ToolForm
      apiPath="/api/summarize"
      label="Text Summarizer"
      placeholder="Paste your text here to summarize..."
    />
  );
}
