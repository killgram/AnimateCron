const errorResponse = (title: string) => {
  return {
    success: false,
    message: title,
  };
};

export { errorResponse };
