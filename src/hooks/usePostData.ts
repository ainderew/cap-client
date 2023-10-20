import { useState } from "react";
import checkToken from "@/utils/functions/checkToken";

interface FetchStateTypes {
  loading: boolean;
  data: any;
}

interface UsePostDataReturnType {
  loading: boolean;
  data: any;
  handlePostRequest: (variables?: Filter) => Promise<any>;
}

type Filter = Record<string, unknown>;

export default function usePostData(endpoint: string): UsePostDataReturnType {
  const [fetchStates, setFetchedStates] = useState<FetchStateTypes>({
    loading: false,
    data: null,
  });

  function handlePostRequest(variables?: Filter): any {
    setFetchedStates((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });

    const filter: Filter = variables ?? {};
    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${checkToken() ?? ""}`,
      },
      body: JSON.stringify(filter),
    })
      .then(async (res) => await res.json())
      .then((data) => {
        setFetchedStates({
          loading: false,
          data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  return { ...fetchStates, handlePostRequest };
}
