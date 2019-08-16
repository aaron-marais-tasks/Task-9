import styled, { css } from 'styled-components'

// End screen text styling
/* Our winning text should have 1vw padding, 1vw bottom margin, a black background color, a white font color,
    and 2vw border radius */
const winTextStyling = css`
    padding: 1vw;
    margin-bottom: 1vw;
    background-color: black;
    color: white;
    border-radius: 2vw;
`

// End screen styling
/* Our status should be an absolute column flexbox, with items centered horizontally and vertically, taking 100%
    width and height, with a bg color slightly red and .3 opacity. Set z-index to 1 to display above parent */
export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(120, 0, 35, 0.3);
    z-index: 1;

    .winText {
        ${winTextStyling}
    }
`
