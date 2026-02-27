export default function TermsCheckbox({ agreed, onAgreeChange }) {
  return (
    <div className="w-full">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => onAgreeChange(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer focus:bg-black"
        />
        <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
          I agree to the{" "}
          <a
            href="/terms"
            target="_blank"
            className="text-black underline hover:no-underline"
            onClick={(e) => e.stopPropagation()}
          >
            Terms and Conditions
          </a>
        </span>
      </label>
    </div>
  );
}