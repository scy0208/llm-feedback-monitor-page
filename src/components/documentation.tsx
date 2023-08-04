import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Documentation = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">LLM Feedback Monitor API Documentation</h1>

      <div className="my-4">
        <h2 className="text-xl font-semibold">Base URL</h2>
        <SyntaxHighlighter language="text" style={docco}>
          https://llm-feedback-monitor.vercel.app/api/v0
        </SyntaxHighlighter>
      </div>

      <div className="my-4">
        <h2 className="text-xl font-semibold">Endpoints</h2>

        {/* Register Project */}
        <h3 className="text-lg font-semibold py-5">Register Project</h3>
        <SyntaxHighlighter language="bash" style={docco}>PUT /register-project</SyntaxHighlighter>

        <h4 className="text-md font-semibold">Request Parameters</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "name": "The name of the project to be registered."
}`}
        </SyntaxHighlighter>

        <h4 className="text-md font-semibold">Request Example</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "name": "My New Project"
}`}
        </SyntaxHighlighter>

        <h4 className="text-md font-semibold">Response Example</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "id": "proj_657a6e9b"
}`}
        </SyntaxHighlighter>

        {/* Register LLM Config */}
        <h3 className="text-lg font-semibold py-5">Register LLM Config</h3>
        <SyntaxHighlighter language="bash" style={docco}>PUT /register-llm-config</SyntaxHighlighter>

        <h4 className="text-md font-semibold">Request Parameters</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "id": "The UUID for the configuration (in UUID format).",
  "config": "A JSON object containing the configuration details.",
  "project_id": "The identifier for the project."
}`}
        </SyntaxHighlighter>

        <h4 className="text-md font-semibold">Request Example</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "config": "{\\"key\\":\\"value\\"}",
  "project_id": "proj_657a6e9b"
}`}
        </SyntaxHighlighter>

        <h4 className="text-md font-semibold">Response Example</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "id": "123e4567-e89b-12d3-a456-426614174000"
}`}
        </SyntaxHighlighter>

        {/* Store Content */}
        <h3 className="text-lg font-semibold py-5">Store Content</h3>
        <SyntaxHighlighter language="bash" style={docco}>PUT /store-content</SyntaxHighlighter>

        <h4 className="text-md font-semibold">Request Parameters</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "content": "The content to be stored.",
  "project_id": "The identifier for the project.",
  "id": "Not a required field, you can provide an id in uuid format if you have stored your content somewhere else. the response will return the id your provided"
}`}
        </SyntaxHighlighter>

        <h4 className="text-md font-semibold">Request Example</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "content": "This is the content to be stored.",
  "project_id": "proj_657a6e9b"
}`}
        </SyntaxHighlighter>

        <h4 className="text-md font-semibold">Response Example</h4>
        <SyntaxHighlighter language="json" style={docco}>
          {`{
  "id": "6b892172-8c40-4260-acc4-6bc3ba85ded2"
}`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Documentation;
