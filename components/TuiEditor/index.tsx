import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useCallback, useEffect, useRef } from "react";

interface TuiEditorProps {
  initialValue: string;
  onChange: (e: string) => void;
}

const TuiEditor = ({ initialValue, onChange }: TuiEditorProps) => {
  const ref = useRef<Editor>(null);

  // initialValue가 바뀌면 Editor의 내용을 바꿔준다.
  useEffect(() => {
    if (!ref.current) return;

    const instance = ref.current.getInstance();
    instance.setHTML(initialValue);
  }, [initialValue]);

  // Editor의 내용이 바뀔때 넘겨받은 핸들러에 내용을 넘겨준다.
  const handleChange = useCallback(() => {
    if (!ref.current) return;

    const instance = ref.current.getInstance();
    onChange(instance.getHTML());
  }, [onChange]);

  return <Editor ref={ref} onChange={handleChange} />;
};

export default TuiEditor;
