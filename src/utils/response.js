function response(res, statusCode, message, data) {
    if (data) {
        return res
            .status(statusCode)
            .json({
                status: statusCode < 400 ? 'success' : 'fail',
                data
            });
    }

    return res
        .status(statusCode)
        .json({
            status: statusCode < 400 ? 'success' : 'fail',
            message
        });
}

export default response;