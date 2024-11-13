import { Button } from "@components/core-ui";

export const ImlForm = () => {
  return (
    <form className="flex flex-col gap-4 capitalize">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-baseline">
        <h1 className="line-clamp-2 content-center text-lg font-semibold sm:text-xl md:text-2xl">
          Iml network
        </h1>
        <Button
          /*     isLoading={updateResult.fetching}
          disabled={updateResult.fetching} */
          spinner={true}
        >
          Update Episode
        </Button>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div>data1</div>
        <div>data2</div>
      </div>
    </form>
  );
};
