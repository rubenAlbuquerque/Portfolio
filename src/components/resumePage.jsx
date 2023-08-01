import { Navbar, Footer } from "../App";
import { Document, Page } from "react-pdf";
import React, { useState } from "react";
import pdfresume from "./cv.pdf";
import cv from "../cv.png";

function Resume() {
    return (
        <>
            <div className="flex justify-center mt-36 mb-32 ">
                <img
                    src={cv}
                    alt="resume"
                    className="w-2/4 shadow-lg rounded-lg"
                />
            </div>
        </>
    );
}

function ResumePage() {
    return (
        <div className="ResumePage">
            <Navbar />
            {/* Resume section */}
            <Resume />
            <Footer />
        </div>
    );
}

export default ResumePage;
