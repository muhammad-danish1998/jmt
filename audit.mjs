import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// System instruction sets the role, standards, and strictness level
const SYSTEM_INSTRUCTION = `
You are a Principal Software Architect and Senior Frontend Quality Reviewer.
Review the provided source code for:
1. Defensive Code Hardening: Proper input validation, secure data handling, clean React state management.
2. Privacy & Data Handling: Ensuring no sensitive credentials, API keys, or private tokens are leaked in client code.
3. Code Cleanliness & Reliability: Async error handling, edge-case validation, memory cleanup, React performance optimizations.

Format your output as:
- [CATEGORY]: CODE QUALITY | INPUT VALIDATION | ERROR HANDLING | PERFORMANCE | BEST PRACTICE
- [LOCATION]: Line number, component, or function name
- [OBSERVATION]: Technical description of the code improvement area
- [IMPROVEMENT]: Recommended architectural fix and code snippet
`;

async function auditCode(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Error: File not found at "${filePath}"`);
        console.log(`💡 Usage: node audit.mjs <file-path> (e.g. node audit.mjs src/components/VideoAndEnquiry.jsx)`);
        return;
    }

    const codeContent = fs.readFileSync(filePath, "utf-8");

    if (!process.env.GEMINI_API_KEY) {
        console.error("❌ Error: GEMINI_API_KEY is not set in your .env file.");
        return;
    }

 const prompt = `
Act as a Principal Full-Stack Engineer and Senior Code Quality Reviewer.

Perform a comprehensive Code Quality, Architecture, and Best Practices review for:
File: ${filePath}

--- SOURCE CODE ---
${codeContent}
--- END SOURCE CODE ---

Review the code thoroughly across these dimensions:
1. CODE HARDENING & DEFENSIVE PRACTICES:
   - Check for hardcoded secrets or sensitive tokens in client-side code.
   - Proper form handling, escaping, and secure client-state transitions.
   - Clean API endpoints and proper client-side sanitization.

2. PRIVACY & DATA INTEGRITY:
   - Safe handling of user inputs (PII, form values).
   - Proper error handling that does not expose internals.

3. REACT & NEXT.JS BEST PRACTICES:
   - Proper hook usage (useEffect dependencies, state initialization).
   - Proper accessibility (ARIA attributes, semantic elements, keyboard navigation).
   - Clean async/await handling with try/catch and loading/error states.

FORMAT YOUR RESPONSE AS:
1. Executive Summary: Code Quality Score (0 to 100) and overall rating.
2. Review Findings & Improvements:
   - [CATEGORY]: Category name
   - [LOCATION]: Line / component name
   - [DESCRIPTION]: What can be improved
   - [REMEDIATION]: Improved code snippet
3. Production-Ready File: Provide the entire refactored file with all best practices applied.
`;

    console.log(`🔍 Auditing ${filePath}...`);

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.2, // Low temperature for deterministic, strict analysis
            maxOutputTokens: 8192,
        },
    });

    console.log("\n=== AUDIT REPORT ===");
    console.log(response.text);
}

// Get file from command line argument (e.g. `node audit.mjs src/components/VideoAndEnquiry.jsx`) or default to app/page.jsx
const targetFile = process.argv[2] || "./app/page.jsx";
auditCode(targetFile).catch(console.error);