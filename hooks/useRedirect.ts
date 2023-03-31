import { useRouter } from "next/router";
import { useEffect } from "react";

interface Routes {
  path: string;
  haveRedirect: boolean;
}

type ParameterTypes = Array<Routes>;

const useRedirect = (routes: ParameterTypes) => {
  const router = useRouter();

  useEffect(() => {
    const pathname = router.pathname;

    for (const route of routes) {
      const { haveRedirect, path } = route;
      if (haveRedirect && pathname !== path) router.push(path);
    }
  }, [routes]);
};

export { useRedirect };
