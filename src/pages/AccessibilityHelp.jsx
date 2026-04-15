import PageContainer from "../components/PageContainer";

export default function AccessibilityHelp() {
  return (
    <PageContainer
      title="Accessibility Help"
      description="This page explains the accessibility support included in the prototype."
    >
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <ul className="space-y-4 text-slate-700">
          <li>
            <span className="font-medium">Keyboard navigation:</span> All main links and form fields can be reached using the keyboard.
          </li>
          <li>
            <span className="font-medium">Visible focus:</span> Focus indicators are provided for keyboard users.
          </li>
          <li>
            <span className="font-medium">Labels and forms:</span> All form inputs use visible labels and clear error messages.
          </li>
          <li>
            <span className="font-medium">Readable contrast:</span> Colors are chosen to maintain clarity and readability.
          </li>
          <li>
            <span className="font-medium">Semantic structure:</span> Proper headings, landmarks, and HTML structure are used.
          </li>
        </ul>
      </div>
    </PageContainer>
  );
}