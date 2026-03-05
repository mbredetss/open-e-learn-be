## Path
[
    {
        method: POST
        endpoint: /openelearn/auth
        req body:
        {
            username*: string, 
            password*: string
        }, 
        if success: {
            response: {
                status: status code,
            accessToken: JWT (example: JWT token example),
            refreshToken: JWT (example: JWT token example)
        }
        }, 
        if error: [
            username or password invalid,
            The request body violates the specified request body tipe data (give an example of an error from Joi library message)
        ]
    }
    {
        method: POST
        endpoint: /openelearn/registry
        req body:
        {
            username*: string, 
            email*: string,
            phone*: string, 
            password*: string
        }, 
        if success: {
            res: {
            status: string,
            message: string
        },
        } 
        if error: [
            username has been used by another user, 
            The request body violates the specified request body tipe data (give an example of an error from Joi library message)
        ]
    }
]