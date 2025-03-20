/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg?react" {
    import { FunctionComponent, SVGAttributes } from "react";
    const content: FunctionComponent<SVGAttributes<SVGElement>>;
    export default content;
}

