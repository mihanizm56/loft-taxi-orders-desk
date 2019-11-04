export type getRequestParams = {
  endpoint: string;
  authorize?: {
    token: string;
  };
};

export type putRequestParams = {
  endpoint: string;
  data: Record<string, any>;
  authorize?: {
    token: string;
  };
};
export type patchRequestParams = {
  endpoint: string;
  data: Record<string, any>;
  authorize?: {
    token: string;
  };
};
export type postRequestParams = {
  endpoint: string;
  data: Record<string, any>;
  authorize?: {
    token: string;
  };
};
