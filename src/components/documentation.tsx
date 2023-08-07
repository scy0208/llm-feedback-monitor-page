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
                <h2 className="text-xl font-semibold pt-10">Endpoints</h2>

                {/* Register Project */}
                <h3 className="text-lg font-semibold pt-5 py-3">Register Project</h3>
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
                <h3 className="text-lg font-semibold pt-20 py-3">Register LLM Config</h3>
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
                <h3 className="text-lg font-semibold pt-20 py-3">Store Content</h3>
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

            {/* Create Feedback */}
            <h3 className="text-lg font-semibold pt-20 py-3">Create Feedback</h3>
            <p>PUT /create-feedback</p>

            <h4 className="text-md font-semibold">Request Parameters</h4>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
  "project_id": "The identifier for the project (required)",
  "config_id": "The identifier for the configuration (required)",
  "content_id": "The identifier for the content (required)",
  "group_id": "The identifier for the group (optional)",
  "key": "A unique key representing the feedback item (required)",
  "score": "A numerical score assigned to the feedback (required)",
  "user": "The identifier for the user providing the feedback (optional)",
  "comment": "A comment or description related to the feedback (optional)",
  "id": "An identifier for the feedback item (optional)"
}`}
            </SyntaxHighlighter>

            <h4 className="text-md font-semibold">Request Example</h4>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
  "project_id": "project-1",
  "config_id": "config-123",
  "content_id": "content-456",
  "key": "feedback-key",
  "score": 4.5,
  "user": "user-789",
  "comment": "Great content!"
}`}
            </SyntaxHighlighter>

            <h4 className="text-md font-semibold">Response Example</h4>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
  "id": "feedback-101"
}`}
            </SyntaxHighlighter>

            <h4 className="text-md font-semibold">Error Responses</h4>
            <p>A 400 status code will be returned if any required parameters are missing or invalid, along with an error message describing the problem.</p>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
  "message": "Project_id is required"
}`}
            </SyntaxHighlighter>
            <p>A 500 status code will be returned if an internal server error occurs.</p>


            {/* List Feedback */}
            <h3 className="text-lg font-semibold pt-20 py-3">List Feedback</h3>
            <p>GET /list-feedback/(project_id)?(query)=(value)</p>

            <h4 className="text-md font-semibold">Request Parameters</h4>
            <table className="table-auto border-collapse border border-black">
                <thead>
                    <tr>
                        <th className="border border-black">URL Parameter</th>
                        <th className="border border-black">Description</th>
                        <th className="border border-black">Required/Optional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black">project_id</td>
                        <td className="border border-black">The identifier for the project</td>
                        <td className="border border-black">Required</td>
                    </tr>
                </tbody>
            {/* </table>
            <p></p>
            <table> */}
                <thead>
                    <tr>
                        <th className="border border-black">Query Parameter</th>
                        <th className="border border-black">Description</th>
                        <th className="border border-black">Required/Optional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black">config_id</td>
                        <td className="border border-black">The identifier for the configuration</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">content_id</td>
                        <td className="border border-black">The identifier for the content</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">group_id</td>
                        <td className="border border-black">The identifier for the group</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">key</td>
                        <td className="border border-black">A unique key representing the feedback item</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">score</td>
                        <td className="border border-black">A numerical score assigned to the feedback</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">user</td>
                        <td className="border border-black">The identifier for the user providing the feedback</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">comment</td>
                        <td className="border border-black">A comment or description related to the feedback</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">id</td>
                        <td className="border border-black">An identifier for the feedback item</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="text-md font-semibold">Request Example</h4>
            <SyntaxHighlighter language="json" style={docco}>
                {`/api/v0/list-feedbacks/proj_657a6e9b?config_id=4b3c7c25-a9cc-4ad2-9019-f765fc2af3ff`}
            </SyntaxHighlighter>

            <h4 className="text-md font-semibold">Response Example</h4>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
	"data": [{
		"id": "effe2198-bbb7-4769-951b-776ade71427f",
		"project_id": "proj_657a6e9b",
		"config_id": "4b3c7c25-a9cc-4ad2-9019-f765fc2af3ff",
		"feedback_source": "API",
		"comment": null,
		"group_id": "71fa57f9-d6c2-4441-a3e7-074f00ed4fcf",
		"content_id": "2789b118-73a2-4a98-94f8-b447c619b0dd",
		"key": "thumb_up",
		"score": 1,
		"user": "scy0208@gmail.com",
		"created_at": "2023-08-05T00:24:35.748752+00:00",
		"LLMConfig": {
			"id": "4b3c7c25-a9cc-4ad2-9019-f765fc2af3ff",
			"created_at": "2023-08-03T23:58:55+00:00",
			"project_id": "proj_657a6e9b",
			"config": {
				"prompt": "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.",
				"model": "gpt-3.5-turbo-0613",
				"temperature": 1.2
			}
		},
		"Content": {
			"id": "2789b118-73a2-4a98-94f8-b447c619b0dd",
			"created_by": "assistant",
			"created_at": "2023-08-05T00:24:33.557744+00:00",
			"content": "A large language model refers to a powerful artificial intelligence system that has been trained on vast amounts of text data to understand and generate human-like text. These models, such as OpenAI's GPT-3 (which I am based on), have billions of parameters and use deep learning techniques to process and analyze text input. Large language models can perform a wide range of natural language processing tasks, including text completion, language translation, question answering, and more. They have the ability to generate coherent and contextually relevant responses, making them useful for various applications in fields like chatbots, content generation, language understanding, and even creative writing.",
			"group_id": "71fa57f9-d6c2-4441-a3e7-074f00ed4fcf",
			"project_id": "proj_657a6e9b",
			"config_id": "4b3c7c25-a9cc-4ad2-9019-f765fc2af3ff"
		}
	}]
}`}
            </SyntaxHighlighter>

            <h4 className="text-md font-semibold">Error Responses</h4>
            <p>A 400 status code will be returned if any required parameters are missing or invalid, along with an error message describing the problem.</p>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
  "message": "Project_id is required"
}`}
            </SyntaxHighlighter>
            <p>A 500 status code will be returned if an internal server error occurs.</p>


            {/* Config Summary */}
            <h3 className="text-lg font-semibold pt-20 py-3">List Feedback</h3>
            <p>GET /config-summary/(project_id)?(query_param)=(value)</p>

            <h4 className="text-md font-semibold">Request Parameters</h4>
            <table className="table-auto border-collapse border border-black">
                <thead>
                    <tr>
                        <th className="border border-black">URL Parameter</th>
                        <th className="border border-black">Description</th>
                        <th className="border border-black">Required/Optional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black">project_id</td>
                        <td className="border border-black">The identifier for the project</td>
                        <td className="border border-black">Required</td>
                    </tr>
                </tbody>
            {/* </table>
            <p></p>
            <table> */}
                <thead>
                    <tr>
                        <th className="border border-black">Query Parameter</th>
                        <th className="border border-black">Description</th>
                        <th className="border border-black">Required/Optional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black">config_id</td>
                        <td className="border border-black">The identifier for the configuration</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                    <tr>
                        <td className="border border-black">key</td>
                        <td className="border border-black">A unique key representing the feedback item</td>
                        <td className="border border-black">Optional</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="text-md font-semibold">Request Example</h4>
            <SyntaxHighlighter language="json" style={docco}>
                {`/api/v0/config-summary/proj_657a6e9b?config_id=4b3c7c25-a9cc-4ad2-9019-f765fc2af3ff`}
            </SyntaxHighlighter>

            <h4 className="text-md font-semibold">Response Example</h4>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
	"data": [{
		"config_id": "4b3c7c25-a9cc-4ad2-9019-f765fc2af3ff",
		"config": "{\"prompt\":\"You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.\",\"model\":\"gpt-3.5-turbo-0613\",\"temperature\":1.2}",
		"project_id": "proj_657a6e9b",
		"key": "thumb_up",
		"total_score": 5
	}]
}`}
            </SyntaxHighlighter>

            <h4 className="text-md font-semibold">Error Responses</h4>
            <p>A 400 status code will be returned if any required parameters are missing or invalid, along with an error message describing the problem.</p>
            <SyntaxHighlighter language="json" style={docco}>
                {`{
  "message": "Project_id is required"
}`}
            </SyntaxHighlighter>
            <p>A 500 status code will be returned if an internal server error occurs.</p>


        </div>
    );
};

export default Documentation;
