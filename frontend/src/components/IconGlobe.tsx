
import { useEffect, useMemo, useState } from "react";
import {
    Cloud,
    fetchSimpleIcons,
    renderSimpleIcon,
    type SimpleIcon,
} from "react-icon-cloud";

type IconGlobeProps = {
  slugs: string[];
};

const IconGlobe = ({ slugs }: IconGlobeProps) => {
  const [icons, setIcons] = useState<{ simpleIcons: Record<string, SimpleIcon> } | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  const renderedIcons = useMemo(() => {
    if (!icons) return null;
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        bgHex: "#f3f2ef",
        fallbackHex: "#6e6e73",
        minContrastRatio: 1.5,
        size: 40, 
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }, [icons]);

  return (
    <Cloud
      containerProps={{
        style: {
          width: "350px",
          height: "350px",
          paddingTop: 40,
          margin: "auto",
        },
      }}
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
      }}
    >
      {renderedIcons}
    </Cloud>
  );
};

export default IconGlobe;
