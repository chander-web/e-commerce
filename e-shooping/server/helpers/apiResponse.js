exports.successResponse = (res, msg) => {
  var data = {
    status: true,
    message: msg
  };
  return res.status(200).json(data);
};

exports.successResponseWithData = (res, msg, data) => {
  var resData = {
    status: true,
    message: msg,
    data: data
  };
  return res.status(200).json(resData);
};

exports.errorResponse = (res, msg) => {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(500).json(data);
};

exports.notFoundResponse = (res, msg) => {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(404).json(data);
};

exports.validationErrorWithData = (res, msg, data) => {
  var resData = {
    status: false,
    message: msg,
    data: data
  };
  return res.status(400).json(resData);
};

exports.successResponseWithList = (res, data) => {
  var resData = {
    status: true,
    data: data
  };
  return res.status(200).json(resData);
};
exports.successResponseWithListPagination = (res, data) => {
  var resData = {
    status: true,
    data: data,
    totalCount: res.totalItemCount
  };
  return res.status(200).json(resData);
};

exports.validationError = (res, msg) => {
  var resData = {
    status: false,
    message: msg,
  };
  return res.status(400).json(resData);
};

exports.conflictResponse = (res, msg) => {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(409).json(data);
};

exports.unauthorizedResponse = (res, msg) => {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(401).json(data);
};