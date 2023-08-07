
# LLM Feedback Monitor API Documentation

This document describes the APIs provided by the LLM Feedback Monitor service, including their endpoints, methods, request parameters, and response formats.

## Base URL

All API endpoints are prefixed with:

```
https://llm-feedback-monitor.vercel.app/api/v0
```

## Endpoints

### Register Project

#### Endpoint

```
PUT /register-project
```

#### Request Parameters

- `name`: The name of the project to be registered.

#### Request Example

```json
{
  "name": "My New Project"
}
```

#### Response Example

```json
{
  "id": "proj_657a6e9b"
}
```

#### Error Responses

A 400 status code will be returned if the name parameter is missing or invalid, along with an error message describing the problem.

For example:

```json
{
  "message": "Name is required"
}
```

A 500 status code will be returned if an internal server error occurs.


### Register LLM Config

#### Endpoint

```
PUT /register-llm-config
```

#### Request Parameters

- `id`: The UUID for the configuration (in UUID format).
- `config`: A JSON object containing the configuration details.
- `project_id`: The identifier for the project.

#### Request Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "config": "{\"key\":\"value\"}",
  "project_id": "proj_657a6e9b"
}
```

#### Response Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000"
}
```

### Store Content

#### Endpoint

```
PUT /store-content
```

#### Request Parameters

- `content`: The content to be stored.
- `project_id`: The identifier for the project.
- `id` is not a required field here, you can provide an id in uuid format if you have stored your content somewhere else.

#### Request Example

```json
{
  "content": "This is the content to be stored.",
  "project_id": "proj_657a6e9b"
}
```

#### Response Example

```json
{
  "id": "6b892172-8c40-4260-acc4-6bc3ba85ded2"
}
```

## Error Responses

For all endpoints, a 400 status code will be returned if any required parameters are missing or invalid, along with an error message describing the problem.

For example:

```json
{
  "message": "Id in uuid format is required"
}
```

A 500 status code will be returned if an internal server error occurs.

### Create Feedback

#### Endpoint

```
PUT /create-feedback
```

#### Request Parameters

- `project_id`: The identifier for the project (required).
- `config_id`: The identifier for the configuration (required).
- `content_id`: The identifier for the content (required).
- `group_id`: The identifier for the group (optional).
- `key`: A unique key representing the feedback item (required).
- `score`: A numerical score assigned to the feedback (required).
- `user`: The identifier for the user providing the feedback (optional).
- `comment`: A comment or description related to the feedback (optional).
- `id`: An identifier for the feedback item (optional).

#### Request Example

```json
{
  "project_id": "project-1",
  "config_id": "config-123",
  "content_id": "content-456",
  "key": "feedback-key",
  "score": 4.5,
  "user": "user-789",
  "comment": "Great content!"
}
```

#### Response Example

```json
{
  "id": "feedback-101"
}
```

#### Error Responses

A 400 status code will be returned if any required parameters are missing or invalid, along with an error message describing the problem.

For example:

```json
{
  "message": "Project_id is required"
}
```

A 500 status code will be returned if an internal server error occurs.


### Create Feedback

#### Endpoint

```
GET /list-feedbacks/<project_id>?<query_param>=<value>
```

#### Request Parameters

| URL Parameter  | Description                                      | Required/Optional |
|----------------|--------------------------------------------------|-------------------|
| `project_id`   | The identifier for the project                   | Required          |

| Query Parameter| Description                                      | Required/Optional |
|----------------|--------------------------------------------------|-------------------|
| `id`           | The identifier for the feedback                  | Optional          |
| `config_id`    | The identifier for the LLM configuration         | Optional          |
| `content_id`   | The identifier for the content                   | Optional          |
| `group_id`     | The identifier for the group                     | Optional          |
| `key`          | A unique key representing the feedback item      | Optional          |
| `score`        | A numerical score assigned to the feedback       | Optional          |
| `user`         | The identifier for the user providing the feedback | Optional        |
| `comment`      | A comment or description related to the feedback | Optional          |
| `id`           | An identifier for the feedback item              | Optional          |


#### Request Example

```
list-feedbacks/proj_657a6e9b?config_id=4b3c7c25-a9cc-4ad2-9019-f765fc2af3ff
```

#### Response Example

```json
{
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
}
```

#### Error Responses

A 400 status code will be returned if any required parameters are missing or invalid, along with an error message describing the problem.

For example:

```json
{
  "message": "Project_id is required"
}
```

A 500 status code will be returned if an internal server error occurs.


## Contact

For any queries related to these APIs, please contact [Support Team](mailto:support@springsun-tech.com).
