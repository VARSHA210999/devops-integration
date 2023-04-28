import { HttpMethod } from "./enum";
import { HttpModel } from "./model";


export class Api {
  private static instance: Api;
  private token: string | null | undefined = null;

  private constructHeaders = async (headers: object, body?: any) => {
    let httpHeaders = {
      ...(body instanceof FormData === false && { "Content-Type": "application/json" }),
      ...headers,
      ...(Api.getInstance().getToken && { Authorization: `Bearer ${Api.getInstance().getToken}` }),
    };

    return httpHeaders;
  };

  async post({
    url,
    body,
    httpOptions,
    headers,
    success,
    error,
  }: HttpModel): Promise<any> {
    const httpHeaders = await this.constructHeaders(headers, body);

    return fetch(url, {
      ...httpOptions,
      headers: { ...httpHeaders },
      method: HttpMethod.POST,
      body: body instanceof FormData ? body : JSON.stringify(body)
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((response) => {
        success?.(response);
        return response;
      })
      .catch(async (err) => {
        try {
          console.log(err);
          let errResponse = await err.json();
          error?.(errResponse);
          return errResponse;
        }
        catch (parseError) {
          error?.(parseError);
          return err;
        }
      })
  }



  set setToken(token: string | undefined | null) {
    this.token = token;
  }

  get getToken(): string | undefined | null {
    return this.token;
  }

  public static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }
}

export default Api.getInstance;
