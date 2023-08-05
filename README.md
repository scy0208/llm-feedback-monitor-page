
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

## Contact

For any queries related to these APIs, please contact [Support Team](mailto:support@springsun-tech.com).
