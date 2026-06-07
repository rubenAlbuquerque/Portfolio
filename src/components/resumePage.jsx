import { Navbar } from "../App";
import cv from "./cv (2).pdf";

function ResumePage() {
    return (
        <div className="ResumePage min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex justify-center px-4 md:px-10 pt-28 pb-16">
                <iframe
                    src={cv}
                    title="Rúben Albuquerque CV"
                    className="resume-cv-viewer w-full max-w-5xl shadow-lg rounded-lg border border-gray-200 bg-white"
                />
            </div>
        </div>
    );
}

export default ResumePage;
