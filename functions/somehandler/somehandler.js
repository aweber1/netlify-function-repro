exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: `function handler called for path: ${event.path}`
  };
}