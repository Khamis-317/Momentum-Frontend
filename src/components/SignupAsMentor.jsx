import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function SignupAsMentor() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      const objectUrl = URL.createObjectURL(e.dataTransfer.files[0]);
      setPreviewUrl(objectUrl);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fileInputRef.current.value === "") return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert(`Submit successful! Admin will review it as soon as possible.`);
    } catch (error) {
      console.error("Submit error:", error);
      setErrors({ submit: "Failed to submit. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden"
      >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white text-center">
            <h2 className="text-2xl font-bold">Mentor Signup</h2>
            <p className="text-blue-100 mt-1">
              Upload your CV and then <span className="font-bold">Admin</span>{" "}
              will review it as soon as possible.
            </p>
          </div>

          <div className="p-6">
            <div
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-8"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={handleClickUpload}
            >
              {previewUrl ? (
                <div className="relative w-full">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-48 object-contain rounded-md mb-4"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile();
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <svg
                    className="w-16 h-16 mb-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <div className="text-center">
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF documents or Images (SVG, PNG, JPG, GIF) - MAX.
                      (800x400px)
                    </p>
                  </div>
                </>
              )}
              <input
                id="dropzone-file"
                type="file"
                className={`hidden ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                } ${errors.name ? "border-red-500 ring-2 ring-red-200" : ""}`}
                onChange={handleFileChange}
                ref={fileInputRef}
                accept="image/*, application/pdf"
              />
            </div>

            {file && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  File selected: {file.name}
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors "
                onClick={() => navigate("/signup")}
                type="button"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
              {errors.submit && (
                <div className="text-red-500 text-sm text-center mt-2">
                  {errors.submit}
                </div>
              )}
            </div>
          </div>
      </form>
    </div>
  );
}
