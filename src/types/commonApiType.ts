export type CommonResType<T = any> =
	| {
			error: {
				code: string;
				response: string;
				message: string;
			};
			success: false;
			extras: T;
	  }
	| {
			data: T;
			success: true;
	  };

export type ApiError = {
	message: string;
	statusCode?: number;
};
