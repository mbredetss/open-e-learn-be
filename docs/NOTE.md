#NOTE:
- Make sure RESTful API users really understand the OpenAPI they are creating.
- always write a short description of the PATH (path item object) on each endpoint.
- If the res body has data, then wrap the data into a data object. Examples: - have a data: {
  "status": "success",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiam9obl9kb2UiLCJpYXQiOjE2ODAwMDAwMDAsImV4cCI6MTY4MDAwMzYwMH0.abc123",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInR5cGUiOiJyZWZyZXNoIiwiaWF0IjoxNjgwMDAwMDAwLCJleHAiOjE2ODA2MDQ4MDB9.xyz789"
  }
} - not have a data: {
  "status": "success",
  "message": "User registered successfully"
}