import { UseHitsProps, useHits } from "react-instantsearch-hooks";
import { AlgoliaDoc } from "../../../graphql/operations";
import { Hit as AlgoliaHit } from "@algolia/client-search";

export type HitsProps<THit> = React.ComponentProps<"div"> &
  UseHitsProps & {
    hitComponent: (props: { hit: THit }) => JSX.Element;
  };

export const Hits = <THit extends AlgoliaHit<AlgoliaDoc>>({
  hitComponent: Hit,
  ...props
}: HitsProps<THit>) => {
  const { hits } = useHits(props);

  return (
    <div>
      <ol className="ais-Hits-list">
        {hits.map((hit) => (
          // <li key={hit.objectID} className="ais-Hits-item">
          <Hit hit={hit as unknown as THit} key={hit.objectID} />
          // </li>
        ))}
      </ol>
    </div>
  );
};
