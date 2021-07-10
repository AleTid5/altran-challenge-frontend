import { useEffect, useState } from "react";
import axios from "axios";
import { Error } from "../enums/error.enum";
import { GnomeInterface } from "../interfaces/gnome.interface";

const fetchAPI = async (): Promise<GnomeInterface[]> => {
  interface BrastlewarkApiResultInterface {
    Brastlewark: GnomeInterface[];
  }

  const {
    data: { Brastlewark },
  }: { data: BrastlewarkApiResultInterface } = await axios.get(
    "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
  );

  return Brastlewark;
};

export default function useBrastlewarkAPI() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gnomes, setGnomes] = useState<GnomeInterface[]>([]);

  useEffect(() => {
    setError(null);

    (async () => {
      try {
        setIsLoading(true);
        setGnomes(await fetchAPI());
      } catch (e) {
        setError(Error.FETCHING);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [gnomes, isLoading, error] as const;
}
