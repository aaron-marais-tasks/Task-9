/*
    This file holds my converter item styling
*/

// Import styled component library
import styled from "styled-components"

// Styled div for each converter item
/* Display as a flexbox, justified with space between items. Styles .title class, transforming
    title to uppercase, with 600 font weight */
export default styled.div`
    display: flex;
    justify-content: space-between;

    .title {
        text-transform: uppercase;
        font-weight: 600;
    }
`
