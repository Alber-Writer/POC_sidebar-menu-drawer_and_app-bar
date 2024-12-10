import { css } from "@emotion/css";

export const container = css`
          display:flex;
          height:100%;
          position:relative;
`

export const main = (mainVisibleHeight:number)=>css`
    display: flex;
    overflow: auto;
    height: ${mainVisibleHeight}dvh;
    flex-grow: 1;
    padding: 5;
`