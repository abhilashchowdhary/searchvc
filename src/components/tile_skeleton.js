import { style } from "../styles/app_styles";
import { Skeleton } from "@/components/ui/skeleton";
import _ from "lodash";
export default function DataTilesSkeleton() {
  var x = 5; // Replace 10 with the desired range end value

  var range = Array.from({ length: x + 1 }, (_, i) => i);

  return (
    <section style={style.tile_container}>
      {range.map(function (number) {
        return (
          <div
            key={number}
            style={{
              ...style.tile_inner,
            }}
          >
            <div style={style.tile_info}>
              <div>
                <Skeleton className="h-8 w-[250px] bg-gray-600" />
                <div style={style.tile_item_metrics_container}></div>
              </div>
            </div>
            <div style={style.tile_item_seperator}></div>
            <Skeleton className="h-24 w-[1100px] bg-gray-600" />
          </div>
        );
      })}
    </section>
  );
}
